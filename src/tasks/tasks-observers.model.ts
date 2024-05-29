import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { User } from '../users/users.model'
import { Task } from './tasks.model'


@Table({tableName: 'tasks_observers', createdAt: false, updatedAt: false})
export class TaskObserver extends Model<TaskObserver> {

  @ForeignKey(() => Task)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  task_id: number

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  user_id: string

}