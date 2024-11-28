import { BelongsTo, BelongsToMany, Column, DataType, HasMany, ForeignKey, Model, Table } from 'sequelize-typescript'
import {ApiProperty} from '@nestjs/swagger'
// import {Role} from '../roles/roles.model'
// import {UserRoles} from '../roles/user-roles.model'
// import {Post} from '../posts/posts.model'
import { Project } from '../projects/projects.model'
import { Workspace } from '../workspaces/workspaces.model'
// import { Role } from '../roles/roles.model'
// import { ProjectRoleForUser } from '../roles/project-roles-for-users.model'
import { ProjectUser } from '../projects/projects-users.model'
import { Organization } from '../organizations/organizations.model'
import { Group } from '../groups/groups.model'
import { OrganizationRoleForUser } from '../roles/organization-roles-for-users.model'
import { GroupUser } from '../groups/groups-users.model'
import { Issue } from '../issues/issues.model'
import { IssueObserver } from '../issues/issues-observers.model'
import { IssueComment } from '../issues-comments/issues-comments.model'

export interface UserCreationAttrs {
  email: string
  password: string
  user_name: string
  profile_name: string
  workspace_id: string
  refresh_token: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Unique identifier'})
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  user_id: string

  @ApiProperty({ example: 'admin', description: 'Name'})
  @Column({ type: DataType.STRING, allowNull: false })
  user_name: string

  @ApiProperty({ example: 'admin', description: 'Profile name'})
  @Column({ type: DataType.STRING, allowNull: false })
  profile_name: string

  @ApiProperty({example: 'user@mail.ru', description: 'Email'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string

  @ApiProperty({example: '12345678', description: 'Password'})
  @Column({ type: DataType.STRING, allowNull: false })
  password: string

  @ApiProperty({example: 'en-US', description: 'Language'})
  @Column({ type: DataType.STRING, defaultValue: 'en-US', allowNull: false })
  lang: string

  // @HasMany(() => Project, 'project_owner')
  // projects: Project[]

  // @ApiProperty({example: 'token', description: 'Refresh token'})
  @Column({ type: DataType.TEXT, allowNull: true })
  refresh_token: string

  @ForeignKey(() => Workspace)
  @Column({ type: DataType.UUID, allowNull: false })
  workspace_id: string

  @BelongsTo(() => Workspace, 'workspace_id')
  workspace: Workspace

  @BelongsToMany(() => Project, { through: { model: () => ProjectUser, unique: false } })
  projects: Project[]

  @HasMany(() => ProjectUser, 'user_id')
  project_users: ProjectUser[]

  // @BelongsToMany(() => Role, { through: { model: () => ProjectRoleForUser, unique: false } })
  // roles: Role[]

  // @BelongsToMany(() => Project, { through: { model: () => ProjectRoleForUser, unique: false } })
  // projects: Project[]

  @BelongsToMany(() => Organization, () => OrganizationRoleForUser)
  organizations: Organization[]

  @BelongsToMany(() => Group, () => GroupUser)
  groups: Group[]

  @BelongsToMany(() => Issue, () => IssueObserver)
  issues: Issue[]

  @HasMany(() => IssueComment, 'user_id')
  issue_comments: IssueComment[]

}