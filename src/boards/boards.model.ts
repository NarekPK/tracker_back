import { Column, DataType, Model, Table, ForeignKey, BelongsTo, BelongsToMany, HasMany } from 'sequelize-typescript'
import { Workspace } from '../workspaces/workspaces.model'
import { Project } from '../projects/projects.model'
import { ProjectBoard } from '../boards/projects-boards.model'
import { TBoardEnumOption } from './dto/create-board.dto'

export interface BoardCreationAttrs {
  board_id: string
  name: string
  columns_field_id: string
  rows_field_id: string
  workspace_id: string
}

@Table({tableName: 'boards'})
export class Board extends Model<Board, BoardCreationAttrs> {

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  board_id: string

  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @Column({ type: DataType.UUID, allowNull: true })
  columns_field_id: string

  @Column({ type: DataType.JSONB, allowNull: true })
  columns_options: TBoardEnumOption[]

  @Column({ type: DataType.UUID, allowNull: true })
  rows_field_id: string

  @Column({ type: DataType.JSONB, allowNull: true })
  rows_options: TBoardEnumOption[]

  @ForeignKey(() => Workspace)
  @Column({ type: DataType.UUID, allowNull: false })
  workspace_id: string

  @BelongsTo(() => Workspace, 'workspace_id')
  workspace: Workspace

  @BelongsToMany(() => Project, { through: { model: () => ProjectBoard, unique: false } })
  projects: Project[]

  @HasMany(() => ProjectBoard, 'board_id')
  project_boards: ProjectBoard[]
}