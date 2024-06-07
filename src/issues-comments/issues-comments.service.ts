import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { IssueComment } from './issues-comments.model'
import { CreateIssueCommentDto } from './dto/create-issue-comment.dto'

@Injectable()
export class IssuesCommentsService {

  constructor(@InjectModel(IssueComment) private IssueCommentRepository: typeof IssueComment) {}

  async createIssueComment(dto: CreateIssueCommentDto) {
    const issue = await this.IssueCommentRepository.create(dto)
    return issue
  }

  async getIssueCommentByValue(value: string) {
    const issue = await this.IssueCommentRepository.findOne({where: {value}})
    return issue
  }

}