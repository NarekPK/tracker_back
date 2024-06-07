import { Module } from '@nestjs/common'
import { IssuesMediaService } from './issues-media.service'
import { IssuesMediaController } from './issues-media.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { IssueMedia } from './issues-media.model'
import { Issue } from '../issues/issues.model'

@Module({
  controllers: [IssuesMediaController],
  providers: [IssuesMediaService],
  imports: [
    SequelizeModule.forFeature([IssueMedia, Issue])
  ],
  exports: [
    IssuesMediaService
  ]
})
export class IssuesMediaModule {}