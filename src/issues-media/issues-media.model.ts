import { Column, DataType, Model, Table, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript'
import { Issue } from '../issues/issues.model'

export interface IssueMediaCreationAttrs {
  name: string
  file_path: string
  position: string
  issue_id: string
}

@Table({tableName: 'issues_media'})
export class IssueMedia extends Model<IssueMedia, IssueMediaCreationAttrs> {

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  media_id: string

  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @Column({ type: DataType.TEXT, allowNull: false })
  file_path: string

  @Column({ type: DataType.SMALLINT, allowNull: false })
  position: string

  @ForeignKey(() => Issue)
  @Column({ type: DataType.UUID, allowNull: false })
  issue_id: string

  @BelongsTo(() => Issue, 'issue_id')
  issues: Issue

}