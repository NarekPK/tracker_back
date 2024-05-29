import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Project } from '../projects/projects.model'
import { User } from '../users/users.model'
import { Role } from './roles.model'

export interface ProjectRoleForUserCreationAttrs {
  project_id: string
  role_id: string
  user_id: string
}

@Table({
  tableName: 'project_roles_for_users',
  createdAt: false,
  updatedAt: false
})
export class ProjectRoleForUser extends Model<ProjectRoleForUser, ProjectRoleForUserCreationAttrs> {

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  id: string

  @ForeignKey(() => Role)
  @Column({ type: DataType.UUID, unique: 'uq_proj_role_user' })
  role_id: string

  @ForeignKey(() => Project)
  @Column({ type: DataType.UUID, unique: 'uq_proj_role_user' })
  project_id: string

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, unique: 'uq_proj_role_user' })
  user_id: string

}