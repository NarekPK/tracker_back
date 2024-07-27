import { Module } from '@nestjs/common'
import { BoardsService } from './boards.service'
import { BoardsController } from './boards.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Board } from './boards.model'
import { Workspace } from '../workspaces/workspaces.model'
import { Project } from '../projects/projects.model'
import { ProjectsModule } from '../projects/projects.module'

@Module({
  controllers: [BoardsController],
  providers: [BoardsService],
  imports: [
    SequelizeModule.forFeature([Board, Workspace, Project]),
    ProjectsModule
  ],
  exports: [
    BoardsService
  ]
})
export class BoardsModule {}