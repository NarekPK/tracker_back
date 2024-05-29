import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { User } from './users.model'
import { InjectModel } from '@nestjs/sequelize'
import { CreateUserDto } from './dto/create-user.dto'
import * as bcrypt from 'bcryptjs'
// import { RolesService } from '../roles/roles.service'
// import { AddRoleDto } from './dto/add-role.dto'
// import { BanUserDto } from './dto/ban-user.dto'

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    const name = dto.email.split('@')[0]
    const hash = await bcrypt.hash(dto.password, 8)
    const user = await this.userRepository.create({ ...dto, password: hash, user_name: name, profile_name: name })
    // const role = await this.roleService.getRoleByValue('ADMIN')
    // await user.$set('roles', [role.id])
    // user.roles = [role]
    const { password, refresh_token, updatedAt, ...newUser } = user.toJSON()
    return newUser
  }

  async getWorkspaceUsers(workspace_id: string) {
    const users = await this.userRepository.findAll({ where: { workspace_id }, attributes: { exclude: ['password', 'refresh_token', 'updatedAt']}})
    return users
  }

  async getUserById(user_id: string, isExcluded=true) {
    const user = await this.userRepository.findOne({ where: { user_id }, attributes: { exclude: isExcluded ? ['password', 'refresh_token', 'updatedAt'] : [] }})
    return user
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email }})
    return user
  }

  async updateUser(dto: CreateUserDto, user_id: string) {
    await this.userRepository.update({ ...dto },{ where: { user_id }})
    const user = this.getUserById(user_id)
    return user
  }

  async deleteUser(userInfo: { user_id: string }) {
    await this.userRepository.destroy({ where: userInfo})
    return { deleted: true }
  }

  async getUserPermissions(user_id: string) {
    const user = await this.userRepository.findOne({ where: { user_id }})
    return user
  }
}