import { Injectable } from '@nestjs/common'
import { Permission } from './permissions.model'
import { InjectModel } from '@nestjs/sequelize'
import { CreatePermissionDto } from './dto/create-permission.dto'
import { basePermissions } from './base-permissions-keys'

@Injectable()
export class PermissionsService {
  constructor(@InjectModel(Permission) private permissionRepository: typeof Permission) {
    // this.createPermissions()
  }

  // async createPermission(dto: CreatePermissionDto) {
  //   const permission = await this.permissionRepository.create(dto)
  //   return permission
  // }

  // async getPermissions() {
  //   const permissions = await this.permissionRepository.findAll({include: { all: true }})
  //   return permissions
  // }

  async createPermissions() {
    const permissions = await this.permissionRepository.bulkCreate(basePermissions)
    return permissions
  }

  async getBasePermissions() {
    const permissions = await this.permissionRepository.findAll({include: { all: true }, attributes: { exclude: ['createdAt', 'updatedAt']}})
    return permissions
  }
}
