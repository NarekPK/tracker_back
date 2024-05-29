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

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({where: {value}})
    return role
  }

  async getRoleByKey(key: string) {
    const role = await this.roleRepository.findOne({ where: { key } })
    return role
  }

  async getRoleById(role_id: string) {
    const role = await this.roleRepository.findOne({ where: { role_id } })
    return role
  }

  async updateRole(dto: CreateRoleDto) {
    await this.roleRepository.update(dto, { where: { role_id: dto.role_id }})
    const role = this.getRoleById(dto.role_id)
    return role
  }

  async deleteRole(roleInfo: { role_id: string }) {
    await this.roleRepository.destroy({ where: roleInfo})
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