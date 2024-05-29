import { Module } from '@nestjs/common'
import { ProjectsService } from './projects.service'
import { ProjectsController } from './projects.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Project } from './projects.model'
import { Workspace } from '../workspaces/workspaces.model'
import { User } from '../users/users.model'
import { RolesModule } from '../roles/roles.module'
import { UsersModule } from '../users/users.module'

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService],
  imports: [
    SequelizeModule.forFeature([Project, Workspace, User]),
    RolesModule,
    UsersModule
  ],
  exports: [
    ProjectsService
  ]
})
export class ProjectsModule {}