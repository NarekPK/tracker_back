import { Column, DataType, Model, Table, ForeignKey, BelongsTo, BelongsToMany, HasMany } from 'sequelize-typescript'
import { Workspace } from '../workspaces/workspaces.model'
import { User } from '../users/users.model'
// import { Role } from '../roles/roles.model'
// import { Group } from '../groups/groups.model'
import { ProjectUser } from '../projects/projects-users.model'
// import { ProjectRoleForUser } from '../roles/project-roles-for-users.model'
// import { ProjectRoleForGroup } from '../roles/project-roles-for-groups.model'
import { OrganizationProject } from '../organizations/organizations-projects.model'
import { Organization } from '../organizations/organizations.model'
import { Board } from '../boards/boards.model'
import { ProjectBoard } from '../boards/projects-boards.model'
import { CustomField } from '../custom-fields/custom-fields.model'
import { ProjectCustomField } from '../projects/projects-custom-fields.model'
import { Issue } from '../issues/issues.model'
import {ApiProperty} from '@nestjs/swagger'

export interface ProjectCreationAttrs {
  name: string
  description: string
  project_owner: string
  project_id: string
  workspace_id: string
}

@Table({tableName: 'projects', createdAt: false, updatedAt: false})
export class Project extends Model<Project, ProjectCreationAttrs> {

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Unique identifier'})
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  project_id: string

  @ApiProperty({ example: 'Project', description: 'Name'})
  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @ApiProperty({ example: '', description: 'Description'})
  @Column({ type: DataType.TEXT, allowNull: true })
  description: string

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Project owner'})
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
  
  @BelongsToMany(() => User, { through: { model: () => ProjectUser, unique: false } })
  users: User[]

  @HasMany(() => ProjectUser, 'project_id')
  project_users: ProjectUser[]

  @BelongsToMany(() => CustomField, { through: { model: () => ProjectCustomField, unique: false } })
  custom_fields: CustomField[]

  @HasMany(() => ProjectCustomField, 'project_id')
  project_custom_fields: ProjectCustomField[]

  @HasMany(() => Issue, 'project_id')
  issues: Issue[]

  // @BelongsToMany(() => Role, () => ProjectRoleForUser)
  // roles: Role[]

  // @BelongsToMany(() => Role, { through: { model: () => ProjectRoleForUser, unique: false } })
  // roles: Role[]

  // @BelongsToMany(() => User, { through: { model: () => ProjectRoleForUser, unique: false } })
  // users: User[]

  // @BelongsToMany(() => Group, () => ProjectRoleForGroup)
  // groups: Group[]

  @BelongsToMany(() => Organization, () => OrganizationProject)
  organizations: Organization[]

  @BelongsToMany(() => Board, { through: { model: () => ProjectBoard, unique: false } })
  boards: Board[]

  @HasMany(() => ProjectBoard, 'project_id')
  project_boards: ProjectBoard[]

}