import { Column, DataType, Model, Table, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript'
import { Task } from '../tasks/tasks.model'

export interface TaskMediaCreationAttrs {
  name: string
  file_path: string
  position: string
  task_id: string
}

@Table({tableName: 'tasks_media'})
export class TaskMedia extends Model<TaskMedia, TaskMediaCreationAttrs> {

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  media_id: string

  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @Column({ type: DataType.TEXT, allowNull: false })
  file_path: string

  @Column({ type: DataType.SMALLINT, allowNull: false })
  position: string

  @ForeignKey(() => Task)
  @Column({ type: DataType.UUID, allowNull: false })
  task_id: string

  @BelongsTo(() => Task, 'task_id')
  tasks: Task

}