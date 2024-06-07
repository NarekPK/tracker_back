import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { User } from '../users/users.model'
import { Issue } from './issues.model'


@Table({tableName: 'issues_observers', createdAt: false, updatedAt: false})
export class IssueObserver extends Model<IssueObserver> {

  @ForeignKey(() => Issue)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  issue_id: number

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  user_id: string

}