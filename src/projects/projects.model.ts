import { Column, DataType, Model, Table, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript'
import { Workspace } from '../workspaces/workspaces.model'
import { User } from '../users/users.model'
import { Role } from '../roles/roles.model'
import { Group } from '../groups/groups.model'
import { ProjectRoleForUser } from '../roles/project-roles-for-users.model'
import { ProjectRoleForGroup } from '../roles/project-roles-for-groups.model'
import { OrganizationProject } from '../organizations/organizations-projects.model'
import { Organization } from '../organizations/organizations.model'
import { Board } from '../boards/boards.model'
import { ProjectBoard } from '../boards/projects-boards.model'
import { CustomField } from '../custom-fields/custom-fields.model'
import { ProjectCustomField } from '../projects/projects-custom-fields.model'

export interface ProjectCreationAttrs {
  name: string
  description: string
  project_owner: string
  project_id: string
  workspace_id: string
}

@Table({tableName: 'projects'})
export class Project extends Model<Project, ProjectCreationAttrs> {

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  project_id: string

  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @Column({ type: DataType.TEXT })
  description: string

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  project_owner: string

  @BelongsTo(() => User, 'project_owner')
  user: User

  @ForeignKey(() => Workspace)
  @Column({ type: DataType.UUID, allowNull: false })
  workspace_id: string

  @BelongsTo(() => Workspace, 'workspace_id')
  workspace: Workspace

  // @BelongsToMany(() => Role, () => ProjectRoleForUser)
  // roles: Role[]

  @BelongsToMany(() => Role, { through: { model: () => ProjectRoleForUser, unique: false } })
  roles: Role[]

  // @BelongsToMany(() => User, { through: { model: () => ProjectRoleForUser, unique: false } })
  // users: User[]

  // @BelongsToMany(() => Group, () => ProjectRoleForGroup)
  // groups: Group[]

  @BelongsToMany(() => Organization, () => OrganizationProject)
  organizations: Organization[]

  @BelongsToMany(() => Board, () => ProjectBoard)
  boards: Board[]

  @BelongsToMany(() => CustomField, () => ProjectCustomField)
  custom_fields: CustomField[]

}