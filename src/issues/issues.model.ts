import { Column, DataType, Model, Table, ForeignKey, HasMany, BelongsTo, BelongsToMany } from 'sequelize-typescript'
import { User } from '../users/users.model'
import { Project } from '../projects/projects.model'
import { IssueObserver } from '../issues/issues-observers.model'
import { IssueComment } from '../issues-comments/issues-comments.model'
import { Workspace } from '../workspaces/workspaces.model'
import { TIssueCustomField } from './dto/create-issue.dto'
import {ApiProperty} from '@nestjs/swagger'

export interface IssueCreationAttrs {
  name: string
  description: string
  custom_fields: TIssueCustomField[]
  issue_id: string
  project_id: string
}

@Table({tableName: 'issues'})
export class Issue extends Model<Issue, IssueCreationAttrs> {

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Unique identifier'})
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  issue_id: string

  @ApiProperty({ example: 'Issue №1', description: 'Name'})
  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @ApiProperty({ example: 'Description', description: 'Description'})
  @Column({ type: DataType.TEXT, allowNull: false })
  description: string

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Author'})
  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  issue_author: string

  @ApiProperty({ example: [], description: 'Custom fields'})
  @Column({ type: DataType.JSONB, allowNull: false, defaultValue: [] })
  custom_fields: TIssueCustomField[]

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Project id'})
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
