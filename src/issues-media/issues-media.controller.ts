import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { IssuesMediaService } from './issues-media.service'
import { CreateIssueMediaDto } from './dto/create-issue-media.dto'

@Controller('issues-media')
export class IssuesMediaController {
  constructor(private issuesMediaService: IssuesMediaService) {}

  @Post()
  create(@Body() dto: CreateIssueMediaDto) {
    return this.issuesMediaService.createIssueMedia(dto)
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.issuesMediaService.getIssueMediaByValue(value)
  }
}