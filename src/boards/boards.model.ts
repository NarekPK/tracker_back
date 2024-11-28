import { Column, DataType, Model, Table, ForeignKey, BelongsTo, BelongsToMany, HasMany } from 'sequelize-typescript'
import { Workspace } from '../workspaces/workspaces.model'
import { Project } from '../projects/projects.model'
import { ProjectBoard } from '../boards/projects-boards.model'
import { TBoardEnumOption } from './dto/create-board.dto'
import {ApiProperty} from '@nestjs/swagger'

export interface BoardCreationAttrs {
  board_id: string
  name: string
  columns_field_id: string
  rows_field_id: string
  workspace_id: string
}

@Table({tableName: 'boards'})
export class Board extends Model<Board, BoardCreationAttrs> {

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Unique identifier'})
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  board_id: string

  @ApiProperty({ example: 'Board', description: 'Name'})
  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Columns field id'})
  @Column({ type: DataType.UUID, allowNull: true })
  columns_field_id: string

  @ApiProperty({ example: [], description: 'Columns options'})
  @Column({ type: DataType.JSONB, allowNull: true })
  columns_options: TBoardEnumOption[]

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Rows field id'})
  @Column({ type: DataType.UUID, allowNull: true })
  rows_field_id: string

  @ApiProperty({ example: [], description: 'Rows options'})
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