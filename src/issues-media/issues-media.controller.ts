import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { IssuesMediaService } from './issues-media.service'
import { CreateIssueMediaDto } from './dto/create-issue-media.dto'
import { AccessTokenGuard } from '../common/guards/access-token.guard'

@Controller('issues-media')
export class IssuesMediaController {
  constructor(private issuesMediaService: IssuesMediaService) {}

  @UseGuards(AccessTokenGuard)
  @Post()
  create(@Body() dto: CreateIssueMediaDto) {
    return this.issuesMediaService.createIssueMedia(dto)
  }

  @UseGuards(AccessTokenGuard)
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.issuesMediaService.getIssueMediaByValue(value)
  }
}