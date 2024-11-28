import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { UsersService } from '../users/users.service'
import { WorkspacesService } from '../workspaces/workspaces.service'
import { RolesService } from '../roles/roles.service'
import { ProjectsService } from '../projects/projects.service'
import { CustomFieldsService } from '../custom-fields/custom-fields.service'
import { IssuesService } from '../issues/issues.service'
import { BoardsService } from '../boards/boards.service'
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'
import { AuthDto } from './dto/auth.dto'

const getBaseColumnOptions = (options) => {
  return [
    {
      fields: [
        {
          id: options.find(o => o.name === 'CF_SUBMITTED').id,
          name: 'CF_SUBMITTED'
        }
      ],
      position: 0
    },
    {
      fields: [
        {
          id: options.find(o => o.name === 'CF_OPEN').id,
          name: 'CF_OPEN'
        },
      ],
      position: 1
    },
    {
      fields: [
        {
          id: options.find(o => o.name === 'CF_IN_PROGRESS').id,
          name: 'CF_IN_PROGRESS'
        },
      ],
      position: 2
    },
    {
      fields: [
        {
          id: options.find(o => o.name === 'CF_FIXED').id,
          name: 'CF_FIXED'
        }
      ],
      position: 3
    }
  ]
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private workspacesService: WorkspacesService,
    private rolesService: RolesService,
    private customFieldsService: CustomFieldsService,
    private projectsService: ProjectsService,
    private issuesService: IssuesService,
    private boardsService: BoardsService,
    private jwtService: JwtService
  ) {}
  async register(createUserDto: CreateUserDto): Promise<any> {
    // Check if user exists
    const userExists = await this.usersService.getUserByEmail(
      createUserDto.email
    )
    if (userExists) {
      throw new BadRequestException('Пользователь уже зарегистрирован')
    }

    let newWorkspace

    if (!createUserDto.workspace_id) {
      newWorkspace = await this.workspacesService.createWorkspace({
        admin_email: createUserDto.email
      })
    }

    const newUser = await this.usersService.createUser({
      ...createUserDto,
      workspace_id: createUserDto.workspace_id || newWorkspace.workspace_id
    })

    if (newWorkspace?.workspace_id) {
      await this.rolesService.createBaseRoles(newWorkspace.workspace_id)
      const customFields = await this.customFieldsService.createBaseCustomFields(newWorkspace.workspace_id)
      const project = await this.projectsService.createProject({
        name: 'Demo',
        description: null,
        project_owner: newUser.user_id,
        workspace_id: newWorkspace?.workspace_id
      })
      await this.projectsService.addCustomFieldsToProject(project, customFields)
      await this.issuesService.createDemoIssues({
        issue_author: newUser.user_id,
        project_id: project.project_id,
        workspace_id: newWorkspace?.workspace_id
      }, customFields)
      const board = await this.boardsService.createBoard({
          name: 'Demo Board',
          workspace_id: newWorkspace?.workspace_id,
          project_id: project.project_id
        })
      const stateField = customFields.find(f => f.key === 'state')

      await this.boardsService.updateBoard(
        board.board_id,
        {
          columns_field_id: stateField.custom_field_id,
          columns_options: getBaseColumnOptions(stateField.options)
        }
      )
    }

    const accessTokenCookie = this.getCookieWithJwtAccessToken(newUser.user_id, newUser.email, newUser.workspace_id)
    const {
      cookie: refreshTokenCookie,
      token: refreshToken,
    } = this.getCookieWithJwtRefreshToken(newUser.user_id, newUser.email)

    await this.updateRefreshToken(newUser.user_id, refreshToken)

    return {
      accessTokenCookie,
      refreshTokenCookie,
      user: newUser
    }
  }

  async login(authData: AuthDto) {
    // Check if user exists
    const user = await this.usersService.getUserByEmail(authData.email)
    let passwordMatches = false
    if (user) passwordMatches = await bcrypt.compare(authData.password, user.password)
    if (!user || !passwordMatches) throw new BadRequestException('Email или пароль неверны')

    const accessTokenCookie = this.getCookieWithJwtAccessToken(user.user_id, user.email, user.workspace_id)
    const {
      cookie: refreshTokenCookie,
      token: refreshToken,
    } = this.getCookieWithJwtRefreshToken(user.user_id, user.email)
  
    await this.updateRefreshToken(user.user_id, refreshToken)
    const { password, refresh_token, updatedAt, ...newUser } = user
    return {
      accessTokenCookie,
      refreshTokenCookie,
      user: newUser
    }
  }

  async logout(user_id: string) {
    this.usersService.updateUser(user_id, { refresh_token: null })
  }

  async refreshTokens(user_id: string, refreshToken: string) {
    const user = await this.usersService.getUserById(user_id, false)
    if (!user || !user.refresh_token) {
      throw new ForbiddenException('Доступ запрещен')
    }
    const refreshTokenMatches = await bcrypt.compare(
      refreshToken,
      user.refresh_token
    )
    if (!refreshTokenMatches) throw new ForbiddenException('Доступ запрещен')

    const accessTokenCookie = this.getCookieWithJwtAccessToken(user.user_id, user.email, user.workspace_id)
    const {
      cookie: refreshTokenCookie,
      token: refreshTokenNew,
    } = this.getCookieWithJwtRefreshToken(user.user_id, user.email)

    await this.updateRefreshToken(user.user_id, refreshTokenNew)
    return {
      accessTokenCookie,
      refreshTokenCookie
    }
  }

  hashData(data: string) {
    return bcrypt.hash(data, 8)
  }

  async updateRefreshToken(user_id: string, refresh_token: string) {
    const hashedRefreshToken = await this.hashData(refresh_token)
    await this.usersService.updateUser(user_id, { refresh_token: hashedRefreshToken })
  }

  getCookieWithJwtAccessToken(user_id: string, email: string, workspace_id: string) {
    const payload = { user_id, email, workspace_id }
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      expiresIn: `${process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME}s`,
    });
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME}`
  }

  getCookieWithJwtRefreshToken(user_id: string, email: string) {
    const payload = { user_id, email }
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_TOKEN_SECRET,
      expiresIn: `${process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME}s`,
    });
    const cookie = `Refresh=${token}; HttpOnly; Path=/; Max-Age=${process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME}`
    return {
      cookie,
      token
    }
  }

  getCookiesForLogOut() {
    return [
      'Authentication=; HttpOnly; Path=/; Max-Age=0',
      'Refresh=; HttpOnly; Path=/; Max-Age=0',
    ]
  }
}