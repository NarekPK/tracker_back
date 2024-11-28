import { Body, Controller, Get, Param, Post, Req, UseGuards, Delete, Patch } from '@nestjs/common'
import { IssuesService } from './issues.service'
import { CreateIssueDto } from './dto/create-issue.dto'
import { AccessTokenGuard } from '../common/guards/access-token.guard'
import { Request } from 'express'
import { Issue } from './issues.model'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Issues')
@Controller('issues')
export class IssuesController {
  constructor(private issuesService: IssuesService) {}

  @ApiOperation({summary: 'Create issue'})
  @ApiResponse({status: 200, type: Issue})
  @UseGuards(AccessTokenGuard)
  @Post()
  createIssue(@Body() dto: CreateIssueDto) {
    return this.issuesService.createIssue(dto)
  }

  @ApiOperation({summary: 'Get current workspace issues'})
  @ApiResponse({status: 200, type: [Issue]})
  @UseGuards(AccessTokenGuard)
  @Get()
  getWorkspaceIssues(@Req() request: Request) {
    return this.issuesService.getWorkspaceIssues(request.user['workspace_id'])
  }

  @ApiOperation({summary: 'Get project issues'})
  @ApiResponse({status: 200, type: [Issue]})
  @UseGuards(AccessTokenGuard)
  @Get('project/:id')
  getProjectIssues(@Param('id') id: string) {
    return this.issuesService.getProjectIssues(id)
  }

  @ApiOperation({summary: 'Get issue'})
  @ApiResponse({status: 200, type: Issue})
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  getIssueById(@Param('id') id: string) {
    return this.issuesService.getIssueById(id)
  }

  @ApiOperation({summary: 'Update issue'})
  @ApiResponse({status: 200, type: Issue})
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  updateIssue(@Param('id') id: string, @Body() issueDto: CreateIssueDto) {
    return this.issuesService.updateIssue(id, issueDto)
  }

  @ApiOperation({summary: 'Delete issue'})
  @ApiResponse({status: 200, type: Issue})
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  deleteIssue(@Param('id') id: string) {
    return this.issuesService.deleteIssue(id)
  }
}