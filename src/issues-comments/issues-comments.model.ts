import { Column, DataType, Model, Table, ForeignKey, BelongsTo, BelongsToMany, HasOne } from 'sequelize-typescript'
import { Issue } from '../issues/issues.model'
import { User } from '../users/users.model'
import {ApiProperty} from '@nestjs/swagger'

export interface IssueCommentCreationAttrs {
  text: string
  issue_id: string
  user_id: string
}

@Table({tableName: 'issues_comments'})
export class IssueComment extends Model<IssueComment, IssueCommentCreationAttrs> {

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Unique identifier'})
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  comment_id: string

  @ApiProperty({ example: 'Comment', description: 'Text'})
  @Column({ type: DataType.TEXT, allowNull: false })
  text: string

  @ApiProperty({ example: null, description: 'Comment replied to id'})
  @ForeignKey(() => IssueComment)
  @Column({ type: DataType.UUID, allowNull: true })
  comment_replied_to_id: string

  @HasOne(() => IssueComment)
  parent: IssueComment

  // @HasOne(this, { sourceKey: 'comment_id', foreignKey: 'comment_replied_to_id', as: 'Parent', constraints: false })

  // @HasMany(() => IssueComment, 'comment_id')
  // issue_comments: IssueComment[]

  // @BelongsTo(() => IssueComment, { as: 'Children' })
  // issue_comments: IssueComment

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Issue id'})
  @ForeignKey(() => Issue)
  @Column({ type: DataType.UUID, allowNull: false })
  issue_id: string

  @BelongsTo(() => Issue, 'issue_id')
  issues: Issue

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'User id'})
  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  user_id: string

  @BelongsTo(() => User, 'user_id')
  user: User

}
