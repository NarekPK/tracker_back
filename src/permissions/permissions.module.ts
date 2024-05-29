import { Module } from '@nestjs/common'
import { PermissionsService } from './permissions.service'
import { PermissionsController } from './permissions.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Permission } from './permissions.model'
// import { Role } from '../roles/roles.model'

@Module({
  providers: [PermissionsService],
  controllers: [PermissionsController],
  imports: [
    SequelizeModule.forFeature([Permission,]) // Role])
  ],
})
export class PermissionsModule {}
