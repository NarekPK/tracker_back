import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { IssuesCommentsService } from './issues-comments.service'
import { CreateIssueCommentDto } from './dto/create-issue-comment.dto'

@Controller('issues-media')
export class IssuesCommentsController {
  constructor(private issuesCommentsService: IssuesCommentsService) {}

  @Post()
  create(@Body() dto: CreateIssueCommentDto) {
    return this.issuesCommentsService.createIssueComment(dto)
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.issuesCommentsService.getIssueCommentByValue(value)
  }
}