import { Body, Controller, Get, Param, Post, Req, UseGuards, Delete, Patch } from '@nestjs/common'
import { IssuesService } from './issues.service'
import { CreateIssueDto } from './dto/create-issue.dto'
import { AccessTokenGuard } from '../common/guards/access-token.guard'
import { Request } from 'express'

@Controller('issues')
export class IssuesController {
  constructor(private issuesService: IssuesService) {}

  @UseGuards(AccessTokenGuard)
  @Post('create-issue')
  create(@Body() dto: CreateIssueDto) {
    return this.issuesService.createIssue(dto)
  }

  @UseGuards(AccessTokenGuard)
  @Get('get-issues')
  getWorkspaceIssues(@Req() request: Request) {
    return this.issuesService.getWorkspaceIssues(request.user['workspace_id'])
  }

  @UseGuards(AccessTokenGuard)
  @Get('get-project-issues/:id')
  getProjectIssues(@Param('id') id: string) {
    return this.issuesService.getProjectIssues(id)
  }

  @UseGuards(AccessTokenGuard)
  @Get('get-issue/:id')
  getIssueById(@Param('id') id: string) {
    return this.issuesService.getIssueById(id)
  }

  @UseGuards(AccessTokenGuard)
  @Patch('update-issue')
  updateIssue(@Body() issueDto: CreateIssueDto) {
    return this.issuesService.updateIssue(issueDto)
  }

  @UseGuards(AccessTokenGuard)
  @Delete('delete-issue')
  deleteIssue(@Body() issueInfo: { issue_id: string }) {
    return this.issuesService.deleteIssue(issueInfo)
  }
}