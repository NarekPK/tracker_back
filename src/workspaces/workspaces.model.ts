import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript'
import { User } from '../users/users.model'
import { Role } from '../roles/roles.model'
import { Organization } from '../organizations/organizations.model'
import { Project } from '../projects/projects.model'
import { Group } from '../groups/groups.model'
import { CustomField } from '../custom-fields/custom-fields.model'
import { ApiProperty } from '@nestjs/swagger'

export interface WorkspaceCreationAttrs {
  admin_email: string
}

@Table({tableName: 'workspaces'})
export class Workspace extends Model<Workspace, WorkspaceCreationAttrs> {
  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Unique identifier'})
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  workspace_id: string

  @ApiProperty({ example: 'admin@mail.ru', description: 'Admin email'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  admin_email: string

  @ApiProperty({ example: false, description: 'Banned'})
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean

  @ApiProperty({ example: null, description: 'Ban reason'})
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