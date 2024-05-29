import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Project } from '../projects/projects.model'
import { Group } from '../groups/groups.model'
import { Role } from './roles.model'

export interface ProjectRoleForGroupCreationAttrs {
  project_id: string
  role_id: string
  group_id: string
}

@Table({tableName: 'project_roles_for_groups', createdAt: false, updatedAt: false})
export class ProjectRoleForGroup extends Model<ProjectRoleForGroup, ProjectRoleForGroupCreationAttrs> {

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  id: string

  @ForeignKey(() => Role)
  @Column({ type: DataType.UUID, unique: 'uq_proj_role_group' })
  role_id: string

  @ForeignKey(() => Project)
  @Column({ type: DataType.UUID, unique: 'uq_proj_role_group' })
  project_id: string

  @ForeignKey(() => Group)
  @Column({ type: DataType.UUID, unique: 'uq_proj_role_group' })
  group_id: string

}