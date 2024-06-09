import { Body, Controller, Get, Param, Post, Delete, Patch, UseGuards } from '@nestjs/common'
import { IssuesCommentsService } from './issues-comments.service'
import { CreateIssueCommentDto } from './dto/create-issue-comment.dto'
import { AccessTokenGuard } from '../common/guards/access-token.guard'

@Controller('issues-comments')
export class IssuesCommentsController {
  constructor(private issuesCommentsService: IssuesCommentsService) {}

  @UseGuards(AccessTokenGuard)
  @Post('add-comment')
  addIssueComment(@Body() issueCommentDto: CreateIssueCommentDto) {
    return this.issuesCommentsService.addIssueComment(issueCommentDto)
  }

  @UseGuards(AccessTokenGuard)
  @Get('get-comments/:id')
  getIssueComments(@Param('id') id: string) {
    return this.issuesCommentsService.getIssueComments({ issue_id: id })
  }

  @UseGuards(AccessTokenGuard)
  @Delete('delete-comment')
  async deleteIssueComment(@Body() commentInfo: { comment_id: string }) {
    return await this.issuesCommentsService.deleteIssueComment(commentInfo)
  }

  @UseGuards(AccessTokenGuard)
  @Patch('update-comment')
  updateIssueComment(@Body() commentInfo: CreateIssueCommentDto) {
    return this.issuesCommentsService.updateIssueComment(commentInfo)
  }

}