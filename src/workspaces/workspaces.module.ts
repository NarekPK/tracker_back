import { Module } from '@nestjs/common'
import {SequelizeModule} from '@nestjs/sequelize'
import { WorkspacesController } from './workspaces.controller'
import { WorkspacesService } from './workspaces.service'
import { Workspace } from './workspaces.model'
import { User } from '../users/users.model'
import { Role } from '../roles/roles.model'

@Module({
  controllers: [WorkspacesController],
  providers: [WorkspacesService],
  imports: [
    SequelizeModule.forFeature([Workspace, User, Role]),
  ],
  exports: [
    WorkspacesService
  ]
})
export class WorkspacesModule {}
