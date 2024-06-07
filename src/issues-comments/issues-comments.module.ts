import { Module } from '@nestjs/common'
import { IssuesCommentsService } from './issues-comments.service'
import { IssuesCommentsController } from './issues-comments.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { IssueComment } from './issues-comments.model'
import { Issue } from '../issues/issues.model'
import { User } from '../users/users.model'

@Module({
  controllers: [IssuesCommentsController],
  providers: [IssuesCommentsService],
  imports: [
    SequelizeModule.forFeature([IssueComment, Issue, User])
  ],
  exports: [
    IssuesCommentsService
  ]
})
export class IssuesCommentsModule {}