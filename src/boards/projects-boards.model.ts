import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Board } from '../boards/boards.model'
import { Project } from '../projects/projects.model'


@Table({tableName: 'projects_boards', createdAt: false, updatedAt: false})
export class ProjectBoard extends Model<ProjectBoard> {

  @ForeignKey(() => Project)
  @Column({ type: DataType.UUID, primaryKey: true })
  project_id: string

  @ForeignKey(() => Board)
  @Column({ type: DataType.UUID, primaryKey: true })
  board_id: string

}