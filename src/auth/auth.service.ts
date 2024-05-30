import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { UsersService } from '../users/users.service'
import { WorkspacesService } from '../workspaces/workspaces.service'
import { RolesService } from '../roles/roles.service'
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'
import { AuthDto } from './dto/auth.dto'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private workspacesService: WorkspacesService,
    private rolesService: RolesService,
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
    this.usersService.updateUser({ refresh_token: null, user_id })
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
    await this.usersService.updateUser({ refresh_token: hashedRefreshToken, user_id })
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