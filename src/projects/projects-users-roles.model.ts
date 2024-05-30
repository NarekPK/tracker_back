import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
// import { Project } from '../projects/projects.model'
import { Role } from '../roles/roles.model'
import { ProjectUser } from '../projects/projects-users.model'
// export interface ProjectUserRoleCreationAttrs {
//   project_id: string
//   role_id: string
//   user_id: string
// }

@Table({
  tableName: 'projects_users_roles',
  createdAt: false,
  updatedAt: false
})
export class ProjectUserRole extends Model<ProjectUserRole> {

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  id: string

  @ForeignKey(() => ProjectUser)
  @Column({ type: DataType.UUID })
  project_user_id: string

  @ForeignKey(() => Role)
  @Column({ type: DataType.UUID })
  role_id: string

}