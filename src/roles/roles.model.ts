import { Column, DataType, Model, Table, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript'
import { Workspace } from '../workspaces/workspaces.model'
// import { Permission } from '../permissions/permissions.model'
// import { RolePermission } from './roles-permissions.model'
// import { ProjectRoleForUser } from './project-roles-for-users.model'
import { ProjectUserRole } from '../projects/projects-users-roles.model'
import { ProjectUser } from '../projects/projects-users.model'
// import { Project } from '../projects/projects.model'
// import { User } from '../users/users.model'
import { Group } from '../groups/groups.model'
import { ProjectRoleForGroup } from '../roles/project-roles-for-groups.model'
import { Organization } from '../organizations/organizations.model'
import { OrganizationRoleForGroup } from '../roles/organization-roles-for-groups.model'
import {ApiProperty} from '@nestjs/swagger'

export interface RoleCreationAttrs {
    name: string
    description: string
    permissions: string[]
    role_id: string
    workspace_id: string
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Unique identifier'})
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  role_id: string

  @ApiProperty({ example: 'RN_ADMIN', description: 'Name'})
  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @ApiProperty({ example: 'RD_ADMIN', description: 'Description'})
  @Column({ type: DataType.TEXT })
  description: string

  @ApiProperty({ example: 'project-admin', description: 'Key'})
  @Column({ type: DataType.STRING, defaultValue: '', allowNull: false })
  key: string

  @ApiProperty({ example: ["profile_updateself", "user_read_basic"], description: 'Permissions'})
  @Column({ type: DataType.JSONB, allowNull: false })
  permissions: string[]

  @ForeignKey(() => Workspace)
  @Column({ type: DataType.UUID, allowNull: false })
  workspace_id: string

  @BelongsTo(() => Workspace, 'workspace_id')
  workspace: Workspace

  @BelongsToMany(() => ProjectUser, { through: { model: () => ProjectUserRole, unique: false } })
  project_users: ProjectUser[]

  // @BelongsToMany(() => Permission, () => RolePermission)
  // permissions: Permission[]

  // @BelongsToMany(() => Project, { through: { model: () => ProjectRoleForUser, unique: false } })
  // projects: Project[]

  // @BelongsToMany(() => User, { through: { model: () => ProjectRoleForUser, unique: false } })
  // users: User[]

  @BelongsToMany(() => Group, { through: { model: () => ProjectRoleForGroup, unique: false } })
  groups: Group[]

  @BelongsToMany(() => Organization, () => OrganizationRoleForGroup)
  organizations: Organization[]

}