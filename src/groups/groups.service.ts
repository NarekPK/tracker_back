import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Group } from './groups.model'
import { InjectModel } from '@nestjs/sequelize'
import { CreateGroupDto } from './dto/create-group.dto'

@Injectable()
export class GroupsService {

  constructor(@InjectModel(Group) private groupRepository: typeof Group) {}

  async createGroup(dto: CreateGroupDto) {
    const group = await this.groupRepository.create(dto)
    // const role = await this.roleService.getRoleByValue('ADMIN')
    // await user.$set('roles', [role.id])
    // user.roles = [role]
    return group
  }

  async getWorkspaceGroups(workspace_id: string) {
    const groups = await this.groupRepository.findAll({ where: { workspace_id }, include: { all: true }})
    return groups
  }
}