import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Permission } from '../permissions/permissions.model'
import { Role } from './roles.model'


@Table({tableName: 'roles_permissions', createdAt: false, updatedAt: false})
export class RolePermission extends Model<RolePermission> {

  @ForeignKey(() => Role)
  @Column({ type: DataType.UUID, primaryKey: true })
  role_id: string

  @ForeignKey(() => Permission)
  @Column({ type: DataType.STRING, primaryKey: true })
  permission_key: string

}