import { Injectable } from '@nestjs/common'
import { InjectModel} from '@nestjs/sequelize'
import { Issue } from './issues.model'
import { CreateIssueDto } from './dto/create-issue.dto'
import { Project } from '../projects/projects.model'
import { User } from '../users/users.model'

@Injectable()
export class IssuesService {

  constructor(@InjectModel(Issue) private issueRepository: typeof Issue) {}

  async createIssue(dto: CreateIssueDto) {
    const issue = await this.issueRepository.create(dto)
    return issue
  }

  async getIssueById(issue_id: string) {
    const issue = await this.issueRepository.findOne({
        where: { issue_id },
        include: [
          {
            model: User,
            attributes: ['profile_name', 'user_id']
          },
          {
            model: Project,
            attributes: ['name', 'project_id']
          }
        ],
        attributes: { exclude: ['project_id', 'issue_author'] },
    })
    return issue
  }

  async getWorkspaceIssues(workspace_id: string) {
    const issues = await this.issueRepository.findAll({ where: { workspace_id },
        include: [
          {
            model: User,
            attributes: ['profile_name', 'user_id']
          },
          {
            model: Project,
            attributes: ['name', 'project_id']
          }
        ],
        attributes: { exclude: ['project_id', 'issue_author'] },
    })
    return issues
  }

  async updateIssue(dto: CreateIssueDto) {
    await this.issueRepository.update(dto, { where: { issue_id: dto.issue_id }})
    const issue = this.getIssueById(dto.issue_id)
    return issue
  }

  async deleteIssue(issueInfo: { issue_id: string }) {
    await this.issueRepository.destroy({ where: issueInfo})
    return { deleted: true }
  }


}