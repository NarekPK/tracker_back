import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Project } from './projects.model'
import { CreateProjectDto, TProjectRole, TProjectUserRole } from './dto/create-project.dto'
import { RolesService } from 'src/roles/roles.service'
import { UsersService } from '../users/users.service'
import { Role } from 'src/roles/roles.model'
import { User } from 'src/users/users.model'
import { ProjectUser } from './projects-users.model'

const PROJECT_ADMIN_KEY = 'project-admin'
const PROJECT_INFO_QUERY = (filters) => {
  return { where: filters, include: {
    model: ProjectUser,
    attributes: ['id', 'project_id'],
    include: [
      {
        model: Role,
        through: { attributes: [] },
        attributes: ['name', 'role_id']
      },
      {
        model: User,
        attributes: ['profile_name', 'user_id']
      }
    ]}
  }
}

// const PROJECT_INFO_QUERY2 = (filters) => {
//   return { where: filters, include: {
//     model: ProjectUser,
//     attributes: ['id'],
//     include: [
//       {
//         model: Role,
//         through: { attributes: ['user_id'] },
//         attributes: ['name', 'role_id']
//       },
//       {
//         model: User,
//         attributes: ['profile_name', 'user_id']
//       }
//     ]}
//   }
// }

@Injectable()
export class ProjectsService {

  constructor(
    @InjectModel(Project) private projectRepository: typeof Project,
    private rolesService: RolesService,
    private usersService: UsersService
  ) {}

  async createProject(dto: CreateProjectDto) {
    const project = await this.projectRepository.create(dto)
    const { createdAt, updatedAt, ...newProject } = project.toJSON()
    const role = await this.rolesService.getRoleByKey(PROJECT_ADMIN_KEY)
    const user = await this.usersService.getUserById(newProject.project_owner)
    if (project && role && user) {
      const newProjectUser = await project.$add('user', user)
      newProjectUser[0].$add('role', role)
    }
    return newProject
  }

  async getWorkspaceProjects(workspace_id: string) {
    const projects = await this.projectRepository.findAll({ where: { workspace_id }, attributes: { exclude: ['createdAt', 'updatedAt']}})
    return projects
  }

  async getProjectById(project_id: string) {
    const project = await this.projectRepository.findOne({ where: { project_id } })
    return project
  }

  async updateProject(dto: CreateProjectDto) {
    await this.projectRepository.update(dto, { where: { project_id: dto.project_id }})
    const project = this.getProjectById(dto.project_id)
    return project
  }

  async deleteProject(projectInfo: { project_id: string }) {
    await this.projectRepository.destroy({ where: projectInfo})
    return { deleted: true }
  }

  async getProjectRoles(projectInfo : { project_id: string }) {
    const project = await this.projectRepository.findOne(PROJECT_INFO_QUERY(projectInfo))

    return project.project_users
  }

  async createProjectRole(dto: TProjectRole) {
    const project = await this.projectRepository.findOne({ where: { project_id: dto.project_id } })
    const role = await this.rolesService.getRoleById(dto.role_id)
    const user = await this.usersService.getUserById(dto.user_id)
    if (project && role && user) {
      const projectUsers = await project.$get('project_users', { where: { project_id: project.project_id, user_id: user.user_id }})
      if (projectUsers.length) {
        projectUsers[0].$add('role', role)
      } else {
        const newProjectUser = await project.$add('user', user)
        newProjectUser[0].$add('role', role)
      }

      return { role_created: true}
    }

    throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND)
  }

  async deleteProjectRoles(projectRoles: TProjectUserRole[]) {
    const reqList = projectRoles.map(async (prRoleInfo) => {
      const project_id = prRoleInfo.project_id
      const user_id = prRoleInfo.user.user_id
      const roles = prRoleInfo.roles.map(r => r.role_id)
      const project = await this.projectRepository.findOne({ where: { project_id } })
      const user = await this.usersService.getUserById(user_id)
      if (project && user) {
        const projectUsers = await project.$get('project_users', { where: { project_id, user_id }})
        if (projectUsers.length) {
          return projectUsers[0].$remove('roles', roles)
        }
      }
    })

    await Promise.all(reqList)
    return { deleted: true }
  }

}