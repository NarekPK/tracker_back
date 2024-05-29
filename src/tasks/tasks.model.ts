import { Column, DataType, Model, Table, ForeignKey, HasMany, BelongsTo, BelongsToMany } from 'sequelize-typescript'
import { User } from '../users/users.model'
import { Project } from '../projects/projects.model'
import { TaskObserver } from '../tasks/tasks-observers.model'
import { TaskComment } from '../tasks-comments/tasks-comments.model'

export interface TaskCreationAttrs {
  name: string
  custom_fields_value: string
  project_id: string
}

@Table({tableName: 'tasks'})
export class Task extends Model<Task, TaskCreationAttrs> {

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  task_id: string

  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @Column({ type: DataType.TEXT, allowNull: false })
  description: string

  @Column({ type: DataType.JSONB, allowNull: false })
  custom_fields_value: string

  @ForeignKey(() => Project)
  @Column({ type: DataType.UUID, allowNull: false })
  project_id: string

  @BelongsTo(() => Project, 'project_id')
  project: Project

  @BelongsToMany(() => User, () => TaskObserver)
  users: User[]

  @HasMany(() => TaskComment, 'task_id')
  task_comments: TaskComment[]

}