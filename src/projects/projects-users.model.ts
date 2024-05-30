import { Column, DataType, ForeignKey, Model, Table, BelongsToMany, BelongsTo } from 'sequelize-typescript'
import { Project } from '../projects/projects.model'
import { User } from '../users/users.model'
import { Role } from '../roles/roles.model'
import { ProjectUserRole } from '../projects/projects-users-roles.model'

export interface ProjectUserCreationAttrs {
  project_id: string
  user_id: string
}

@Table({
  tableName: 'projects_users',
  createdAt: false,
  updatedAt: false
})
export class ProjectUser extends Model<ProjectUser, ProjectUserCreationAttrs> {

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  id: string

  @ForeignKey(() => Project)
  @Column({ type: DataType.UUID, unique: 'uq_proj_role_user' })
  project_id: string

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, unique: 'uq_proj_role_user' })
  user_id: string

  @BelongsTo(() => Project, 'project_id')
  project: Project

  @BelongsTo(() => User, 'user_id')
  user: User

  @BelongsToMany(() => Role, { through: { model: () => ProjectUserRole, unique: false } })
  roles: Role[]

}