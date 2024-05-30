import { BelongsTo, BelongsToMany, Column, DataType, HasMany, ForeignKey, Model, Table } from 'sequelize-typescript'
// import {ApiProperty} from '@nestjs/swagger'
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
import { Task } from '../tasks/tasks.model'
import { TaskObserver } from '../tasks/tasks-observers.model'
import { TaskComment } from '../tasks-comments/tasks-comments.model'

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
  // @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  // @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  // id: number

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  user_id: string

  @Column({ type: DataType.STRING, allowNull: false })
  user_name: string

  @Column({ type: DataType.STRING, allowNull: false })
  profile_name: string

  // @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string

  // @ApiProperty({example: '12345678', description: 'Пароль'})
  @Column({ type: DataType.STRING, allowNull: false })
  password: string

  // @HasMany(() => Project, 'project_owner')
  // projects: Project[]

  // @ApiProperty({example: '12345678', description: 'Пароль'})
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

  @BelongsToMany(() => Task, () => TaskObserver)
  tasks: Task[]

  @HasMany(() => TaskComment, 'user_id')
  task_comments: TaskComment[]

}