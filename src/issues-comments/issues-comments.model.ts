import { Column, DataType, Model, Table, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript'
import { Issue } from '../issues/issues.model'
import { User } from '../users/users.model'

export interface IssueCommentCreationAttrs {
  text: string
  issue_id: string
  user_id: string
}

@Table({tableName: 'issues_comments'})
export class IssueComment extends Model<IssueComment, IssueCommentCreationAttrs> {

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  comment_id: string

  @Column({ type: DataType.TEXT, allowNull: false })
  text: string

  @Column({ type: DataType.UUID, allowNull: true })
  comment_replied_to_id: string

  @ForeignKey(() => Issue)
  @Column({ type: DataType.UUID, allowNull: false })
  issue_id: string

  @BelongsTo(() => Issue, 'issue_id')
  issues: Issue

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  user_id: string

  @BelongsTo(() => User, 'user_id')
  users: User

}