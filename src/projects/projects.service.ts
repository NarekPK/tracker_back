import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Project } from './projects.model'
import { CreateProjectDto, TProjectRole } from './dto/create-project.dto'
import { RolesService } from 'src/roles/roles.service'
import { UsersService } from '../users/users.service'
// import { Role } from 'src/roles/roles.model'
// import { User } from 'src/users/users.model'

const PROJECT_ADMIN_KEY = 'project-admin'

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
      await user.$add('role', role, { through: { project_id: project.project_id }})
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

  async getProjectRoles(project_id: string) {
    const project = await this.projectRepository.findOne({ where: { project_id } })
    return await project.$get('roles')
  }

  async createProjectRole(dto: TProjectRole) {
    const project = await this.projectRepository.findOne({ where: { project_id: dto.project_id } })
    const role = await this.rolesService.getRoleById(dto.role_id)
    const user = await this.usersService.getUserById(dto.user_id)
    if (project && role && user) {
      await user.$add('role', role, { through: { project_id: project.project_id }})
    }
    return project
  }

}