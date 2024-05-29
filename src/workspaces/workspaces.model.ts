import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript'
import { User } from '../users/users.model'
import { Role } from '../roles/roles.model'
import { Organization } from '../organizations/organizations.model'
import { Project } from '../projects/projects.model'
import { Group } from '../groups/groups.model'
import { CustomField } from '../custom-fields/custom-fields.model'

export interface WorkspaceCreationAttrs {
  admin_email: string
}

@Table({tableName: 'workspaces'})
export class Workspace extends Model<Workspace, WorkspaceCreationAttrs> {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  workspace_id: string

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  admin_email: string

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean

  @Column({ type: DataType.STRING, allowNull: true })
  ban_reason: string

  @HasMany(() => User, 'workspace_id')
  users: User[]

  @HasMany(() => Role, 'workspace_id')
  roles: Role[]

  @HasMany(() => Group, 'workspace_id')
  groups: Group[]

  @HasMany(() => Organization, 'workspace_id')
  organizations: Organization[]

  @HasMany(() => Project, 'workspace_id')
  projects: Project[]

  @HasMany(() => CustomField, 'workspace_id')
  custom_fields: CustomField[]
}