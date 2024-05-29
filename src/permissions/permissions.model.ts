import { json } from 'sequelize'
import { BelongsToMany, Column, DataType, HasMany, ForeignKey, Model, Table } from 'sequelize-typescript'
// import { RolePermission } from '../roles/roles-permissions.model'
// import { Role } from '../roles/roles.model'
// import {ApiProperty} from '@nestjs/swagger'
import { TRelatedPermission } from './dto/create-permission.dto'

export interface PermissionCreationAttrs {
  permission_key: string
  permission_id: string
  name: string
  description: string
  global: boolean
  entity_type: string
  operation: string
  dependent_permissions: TRelatedPermission[]
  implied_permissions: TRelatedPermission[]
}

@Table({tableName: 'permissions'})
export class Permission extends Model<Permission, PermissionCreationAttrs> {
  @Column({ type: DataType.STRING, allowNull: false, primaryKey: true })
  permission_key: string

  @Column({ type: DataType.STRING, allowNull: false })
  permission_id: string

  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @Column({ type: DataType.TEXT, allowNull: false })
  description: string
  
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  global: boolean

  @Column({ type: DataType.STRING })
  entity_type: string

  @Column({ type: DataType.STRING, allowNull: false })
  operation: string

  @Column({ type: DataType.JSONB })
  dependent_permissions: TRelatedPermission[]

  @Column({ type: DataType.JSONB })
  implied_permissions: TRelatedPermission[]

  // @BelongsToMany(() => Role, () => RolePermission)
  // roles: Role[]

}