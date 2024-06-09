import { Column, DataType, Model, Table, ForeignKey, BelongsTo, BelongsToMany, HasOne } from 'sequelize-typescript'
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

  @ForeignKey(() => Issue)
  @Column({ type: DataType.UUID, allowNull: false })
  issue_id: string

  @BelongsTo(() => Issue, 'issue_id')
  issues: Issue

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  user_id: string

  @BelongsTo(() => User, 'user_id')
  user: User

}
