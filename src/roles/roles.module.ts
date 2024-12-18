import { Module } from '@nestjs/common'
import { RolesService } from './roles.service'
import { RolesController } from './roles.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Role } from './roles.model'
import { Workspace } from '../workspaces/workspaces.model'
// import { Permission } from '../permissions/permissions.model'

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([Role, Workspace, ]) // Permission])
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}