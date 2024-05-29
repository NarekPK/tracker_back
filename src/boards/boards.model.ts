import { Column, DataType, Model, Table, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript'
import { Workspace } from '../workspaces/workspaces.model'
import { Project } from '../projects/projects.model'
import { ProjectBoard } from '../boards/projects-boards.model'

export interface BoardCreationAttrs {
  name: string
  workspace_id: string
}

@Table({tableName: 'boards'})
export class Board extends Model<Board, BoardCreationAttrs> {

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  board_id: string

  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @ForeignKey(() => Workspace)
  @Column({ type: DataType.UUID, allowNull: false })
  workspace_id: string

  @BelongsTo(() => Workspace, 'workspace_id')
  workspace: Workspace

  @BelongsToMany(() => Project, () => ProjectBoard)
  projects: Project[]
}