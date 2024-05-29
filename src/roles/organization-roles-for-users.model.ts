import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Organization } from '../organizations/organizations.model'
import { User } from '../users/users.model'
import { Role } from './roles.model'


@Table({tableName: 'organization_roles_for_users', createdAt: false, updatedAt: false})
export class OrganizationRoleForUser extends Model<OrganizationRoleForUser> {

  @ForeignKey(() => Role)
  @Column({ type: DataType.UUID, primaryKey: true })
  role_id: string

  @ForeignKey(() => Organization)
  @Column({ type: DataType.UUID, primaryKey: true })
  org_id: string

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, primaryKey: true })
  user_id: string

}