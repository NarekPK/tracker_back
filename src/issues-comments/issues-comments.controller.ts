import { Body, Controller, Get, Param, Post, Delete, Patch, UseGuards } from '@nestjs/common'
import { IssuesCommentsService } from './issues-comments.service'
import { CreateIssueCommentDto } from './dto/create-issue-comment.dto'
import { AccessTokenGuard } from '../common/guards/access-token.guard'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { IssueComment } from './issues-comments.model'

@ApiTags('Issues comments')
@Controller('issues-comments')
export class IssuesCommentsController {
  constructor(private issuesCommentsService: IssuesCommentsService) {}

  @ApiOperation({summary: 'Create issue comment'})
  @ApiResponse({status: 200, type: IssueComment})
  @UseGuards(AccessTokenGuard)
  @Post()
  addIssueComment(@Body() issueCommentDto: CreateIssueCommentDto) {
    return this.issuesCommentsService.addIssueComment(issueCommentDto)
  }

  @ApiOperation({summary: 'Get issue comments'})
  @ApiResponse({status: 200, type: [IssueComment]})
  @UseGuards(AccessTokenGuard)
  @Get('issue/:id')
  getIssueComments(@Param('id') id: string) {
    return this.issuesCommentsService.getIssueComments({ issue_id: id })
  }

  @ApiOperation({summary: 'Update issue comment'})
  @ApiResponse({status: 200, type: IssueComment})
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  updateIssueComment(@Param('id') id: string, @Body() commentInfo: CreateIssueCommentDto) {
    return this.issuesCommentsService.updateIssueComment(id, commentInfo)
  }

  @ApiOperation({summary: 'Delete issue comment'})
  @ApiResponse({status: 200, type: Boolean})
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async deleteIssueComment(@Param('id') id: string) {
    return await this.issuesCommentsService.deleteIssueComment(id)
  }
}