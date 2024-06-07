import { Module } from '@nestjs/common'
import { IssuesService } from './issues.service'
import { IssuesController } from './issues.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Issue } from './issues.model'
import { Project } from '../projects/projects.model'
import { User } from '../users/users.model'
import { Workspace } from '../workspaces/workspaces.model'

@Module({
  controllers: [IssuesController],
  providers: [IssuesService],
  imports: [
    SequelizeModule.forFeature([Issue, Project, User, Workspace])
  ],
  exports: [
    IssuesService
  ]
})
export class IssuesModule {}