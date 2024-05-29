import { Column, DataType, Model, Table, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript'
import { Workspace } from '../workspaces/workspaces.model'
import { User } from '../users/users.model'
import { Role } from '../roles/roles.model'
import { Group } from '../groups/groups.model'
import { OrganizationRoleForUser } from '../roles/organization-roles-for-users.model'
import { OrganizationRoleForGroup } from '../roles/organization-roles-for-groups.model'
import { Project } from '../projects/projects.model'
import { OrganizationProject } from '../organizations/organizations-projects.model'

export interface OrganizationCreationAttrs {
  name: string
  workspace_id: string
}

@Table({tableName: 'organizations'})
export class Organization extends Model<Organization, OrganizationCreationAttrs> {

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  org_id: string

  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @Column({ type: DataType.TEXT, allowNull: false })
  description: string

  @ForeignKey(() => Workspace)
  @Column({ type: DataType.UUID, allowNull: false })
  workspace_id: string

  @BelongsTo(() => Workspace, 'workspace_id')
  workspace: Workspace

  @BelongsToMany(() => Role, () => OrganizationRoleForUser)
  roles: Role[]

  @BelongsToMany(() => User, () => OrganizationRoleForUser)
  users: User[]

  @BelongsToMany(() => Group, () => OrganizationRoleForGroup)
  groups: Group[]

  @BelongsToMany(() => Project, () => OrganizationProject)
  projects: Project[]
}