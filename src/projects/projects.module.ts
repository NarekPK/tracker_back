import { Module } from '@nestjs/common'
import { ProjectsService } from './projects.service'
import { ProjectsController } from './projects.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Project } from './projects.model'
import { Workspace } from '../workspaces/workspaces.model'
import { User } from '../users/users.model'
import { RolesModule } from '../roles/roles.module'
import { UsersModule } from '../users/users.module'
import { Issue } from '../issues/issues.model'
import { Board } from '../boards/boards.model'

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService],
  imports: [
    SequelizeModule.forFeature([Project, Workspace, User, Issue, Board]),
    RolesModule,
    UsersModule
  ],
  exports: [
    ProjectsService
  ]
})
export class ProjectsModule {}