import { Injectable } from '@nestjs/common'
import { CreateRoleDto } from './dto/create-role.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Role } from './roles.model'
import { baseRoles } from './base-roles'

@Injectable()
export class RolesService {

  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  // async createRole(dto: CreateRoleDto) {
  //   const role = await this.roleRepository.create(dto)
  //   return role
  // }

  async createRole(dto: CreateRoleDto) {
    const role = await this.roleRepository.create(dto)
    const { createdAt, updatedAt, ...newRole } = role.toJSON()
    return newRole
  }

  async getWorkspaceRoles(workspace_id: string) {
    const roles = await this.roleRepository.findAll({ where: { workspace_id }, attributes: { exclude: ['createdAt', 'updatedAt']}})
    return roles
  }

  async getRoleByKey(key: string) {
    const role = await this.roleRepository.findOne({ where: { key } })
    return role
  }

  async getRoleById(role_id: string) {
    const role = await this.roleRepository.findOne({ where: { role_id } })
    return role
  }

  async updateRole(role_id: string, dto: CreateRoleDto) {
    await this.roleRepository.update(dto, { where: { role_id }})
    const role = this.getRoleById(role_id)
    return role
  }

  async deleteRole(role_id: string) {
    await this.roleRepository.destroy({ where: { role_id } })
    return { deleted: true }
  }

  async createBaseRoles(workspace_id: string) {
    const handledRoles = baseRoles.map(role => {
      return {
        ...role,
        workspace_id
      }
    })
    const roles = await this.roleRepository.bulkCreate(handledRoles)
    return roles
  }

}