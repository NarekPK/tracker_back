import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Workspace } from './workspaces.model'
import {InjectModel} from '@nestjs/sequelize'
import { CreateWorkspaceDto } from './dto/create-workspace.dto'
// import {RolesService} from '../roles/roles.service'
// import {AddRoleDto} from './dto/add-role.dto'

@Injectable()
export class WorkspacesService {

  constructor(@InjectModel(Workspace) private workspaceRepository: typeof Workspace) {}

  async createWorkspace(dto: CreateWorkspaceDto) {
    const workspace = await this.workspaceRepository.create(dto)
    return workspace
  }

  async getWorkspace(admin_email: string) {
    const workspace = await this.workspaceRepository.findOne({where: { admin_email }, include: {all: true}})
    return workspace
  }
}