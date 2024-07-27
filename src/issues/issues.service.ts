import { Injectable } from '@nestjs/common'
import { InjectModel} from '@nestjs/sequelize'
import { Issue } from './issues.model'
import { CreateIssueDto } from './dto/create-issue.dto'
import { Project } from '../projects/projects.model'
import { User } from '../users/users.model'
import { demoIssues } from './demo-issues'

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
    const issues = await this.issueRepository.findAll({
      where: { workspace_id },
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
      order: [['createdAt', 'ASC']]
    })
    return issues
  }

  async getProjectIssues(project_id: string) {
    const issues = await this.issueRepository.findAll({
      where: { project_id },
      include: [
        {
          model: User,
          attributes: ['profile_name', 'user_id']
        }
      ],
      attributes: { exclude: ['issue_author'] },
      order: [['createdAt', 'ASC']]
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

  async createDemoIssues(issuesInfo: { issue_author: string, project_id: string, workspace_id: string }, customFields) {
    const demoInfo = demoIssues.map(d => {
      const preparedCustomFields = Object.entries(d.custom_fields).map(([key, value]) => {
        const customField = customFields.find(f => f.key === key)
        const res = {
          id: customField?.custom_field_id,
          value: value,
          option_id: customField.options?.find(o => o.name === value).id
        }
        return res
      })
      return { ...d, ...issuesInfo, custom_fields: preparedCustomFields }
    })
    const issues = await this.issueRepository.bulkCreate(demoInfo)
    return issues
  }


}