import { Column, DataType, Model, Table, ForeignKey, HasMany, BelongsTo, BelongsToMany } from 'sequelize-typescript'
import { User } from '../users/users.model'
import { Project } from '../projects/projects.model'
import { IssueObserver } from '../issues/issues-observers.model'
import { IssueComment } from '../issues-comments/issues-comments.model'
import { Workspace } from '../workspaces/workspaces.model'
import { TIssueCustomField } from './dto/create-issue.dto'

export interface IssueCreationAttrs {
  name: string
  description: string
  custom_fields: TIssueCustomField[]
  issue_id: string
  project_id: string
}

@Table({tableName: 'issues'})
export class Issue extends Model<Issue, IssueCreationAttrs> {

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  issue_id: string

  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @Column({ type: DataType.TEXT, allowNull: false })
  description: string

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  issue_author: string

  @Column({ type: DataType.JSONB, allowNull: false, defaultValue: [] })
  custom_fields: TIssueCustomField[]

  @ForeignKey(() => Project)
  @Column({ type: DataType.UUID, allowNull: false })
  project_id: string

  @BelongsTo(() => Project, 'project_id')
  project: Project

  @ForeignKey(() => Workspace)
  @Column({ type: DataType.UUID, allowNull: false })
  workspace_id: string

  @BelongsTo(() => Workspace, 'workspace_id')
  workspace: Workspace

  @BelongsTo(() => User, 'issue_author')
  user: User

  // @BelongsToMany(() => User, () => IssueObserver)
  // users: User[]

  @HasMany(() => IssueComment, 'issue_id')
  issue_comments: IssueComment[]

}
