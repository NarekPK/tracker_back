import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { IssueComment } from './issues-comments.model'
import { CreateIssueCommentDto } from './dto/create-issue-comment.dto'
import { User } from 'src/users/users.model'

@Injectable()
export class IssuesCommentsService {

  constructor(@InjectModel(IssueComment) private issueCommentRepository: typeof IssueComment) {}

  async addIssueComment(dto: CreateIssueCommentDto) {
    const comment = await this.issueCommentRepository.create(dto)
    return comment
  }

  async getIssueComments(issueInfo : { issue_id: string }) {
    const comments = await this.issueCommentRepository.findAll({
      where: issueInfo,
      include: {
        model: User,
        attributes: ['user_id', 'profile_name']
      },
      attributes: { exclude: ['user_id', 'updatedAt']},
      order: [['createdAt', 'ASC']]
    })
    return comments
  }

  async deleteIssueComment(commentInfo: { comment_id: string }) {
    await this.issueCommentRepository.destroy({ where: commentInfo})
    return { deleted: true }
  }

  async getCommentById(comment_id: string) {
    const comment = await this.issueCommentRepository.findOne({ where: { comment_id } })
    return comment
  }

  async updateIssueComment(dto: CreateIssueCommentDto) {
    await this.issueCommentRepository.update(dto, { where: { comment_id: dto.comment_id }})
    const comment = this.getCommentById(dto.comment_id)
    return comment
  }

}