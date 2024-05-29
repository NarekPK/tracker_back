import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Organization } from '../organizations/organizations.model'
import { Group } from '../groups/groups.model'
import { Role } from './roles.model'


@Table({tableName: 'organization_roles_for_groups', createdAt: false, updatedAt: false})
export class OrganizationRoleForGroup extends Model<OrganizationRoleForGroup> {

  @ForeignKey(() => Role)
  @Column({ type: DataType.UUID, primaryKey: true })
  role_id: string

  @ForeignKey(() => Organization)
  @Column({ type: DataType.UUID, primaryKey: true })
  org_id: string

  @ForeignKey(() => Group)
  @Column({ type: DataType.UUID, primaryKey: true })
  group_id: string

}