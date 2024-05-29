import { forwardRef, Module } from '@nestjs/common'
import { GroupsController } from './groups.controller'
import { GroupsService } from './groups.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Group } from './groups.model'
import { Project } from '../projects/projects.model'
import { Workspace } from '../workspaces/workspaces.model'
// import {AuthModule} from '../auth/auth.module'

@Module({
  controllers: [GroupsController],
  providers: [GroupsService],
  imports: [
      SequelizeModule.forFeature([Group, Workspace, Project]),
      // RolesModule,
      // forwardRef(() => AuthModule),
  ],
  exports: [
      GroupsService
  ]
})
export class GroupsModule {}