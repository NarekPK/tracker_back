import { Column, DataType, Model, Table, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript'
import { Task } from '../tasks/tasks.model'
import { User } from '../users/users.model'

export interface TaskCommentCreationAttrs {
  text: string
  task_id: string
  user_id: string
}

@Table({tableName: 'tasks_comments'})
export class TaskComment extends Model<TaskComment, TaskCommentCreationAttrs> {

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  comment_id: string

  @Column({ type: DataType.TEXT, allowNull: false })
  text: string

  @Column({ type: DataType.UUID, allowNull: true })
  comment_replied_to_id: string

  @ForeignKey(() => Task)
  @Column({ type: DataType.UUID, allowNull: false })
  task_id: string

  @BelongsTo(() => Task, 'task_id')
  tasks: Task

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  user_id: string

  @BelongsTo(() => User, 'user_id')
  users: User

}