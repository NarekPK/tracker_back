import { BelongsTo, BelongsToMany, Column, DataType, HasMany, ForeignKey, Model, Table } from 'sequelize-typescript'
// import {ApiProperty} from '@nestjs/swagger'
import { Project } from '../projects/projects.model'
import { Workspace } from '../workspaces/workspaces.model'
import { Role } from '../roles/roles.model'
import { ProjectRoleForGroup } from '../roles/project-roles-for-groups.model'
import { Organization } from '../organizations/organizations.model'
import { OrganizationRoleForGroup } from '../roles/organization-roles-for-groups.model'
import { User } from '../users/users.model'
import { GroupUser } from '../groups/groups-users.model'

export interface GroupCreationAttrs {
  name: string
  workspace_id: string
}

@Table({tableName: 'groups'})
export class Group extends Model<Group, GroupCreationAttrs> {
  // @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  // @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  // id: number

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  group_id: string

  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @Column({ type: DataType.TEXT, allowNull: false })
  description: string

  @ForeignKey(() => Workspace)
  @Column({ type: DataType.UUID, allowNull: false })
  workspace_id: string

  @BelongsTo(() => Workspace, 'workspace_id')
  workspace: Workspace

  @BelongsToMany(() => Role, { through: { model: () => ProjectRoleForGroup, unique: false } })
  roles: Role[]

  @BelongsToMany(() => Project, { through: { model: () => ProjectRoleForGroup, unique: false } })
  projects: Project[]

  @BelongsToMany(() => Organization, () => OrganizationRoleForGroup)
  organizations: Organization[]

  @BelongsToMany(() => User, () => GroupUser)
  users: User[]

}