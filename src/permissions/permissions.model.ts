import { json } from 'sequelize'
import { BelongsToMany, Column, DataType, HasMany, ForeignKey, Model, Table } from 'sequelize-typescript'
// import { RolePermission } from '../roles/roles-permissions.model'
// import { Role } from '../roles/roles.model'
import {ApiProperty} from '@nestjs/swagger'
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

  @ApiProperty({ example: 'create_issue', description: 'Key'})
  @Column({ type: DataType.STRING, allowNull: false, primaryKey: true })
  permission_key: string

  @ApiProperty({ example: '22', description: 'Id'})
  @Column({ type: DataType.STRING, allowNull: false })
  permission_id: string

  @ApiProperty({ example: 'PN_CREATE_ISSUE', description: 'Name'})
  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @ApiProperty({ example: 'Create new issue', description: 'Description'})
  @Column({ type: DataType.TEXT, allowNull: false })
  description: string
  
  @ApiProperty({ example: false, description: 'Is global or not'})
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  global: boolean

  @ApiProperty({ example: 'PE_ISSUE', description: 'Entity type'})
  @Column({ type: DataType.STRING })
  entity_type: string

  @ApiProperty({ example: 'PO_CREATE', description: 'Operation'})
  @Column({ type: DataType.STRING, allowNull: false })
  operation: string

  @ApiProperty({ example: [null], description: 'Dependent permissions'})
  @Column({ type: DataType.JSONB })
  dependent_permissions: TRelatedPermission[]

  @ApiProperty({ example: [null], description: 'Implied permissions'})
  @Column({ type: DataType.JSONB })
  implied_permissions: TRelatedPermission[]

  // @BelongsToMany(() => Role, () => RolePermission)
  // roles: Role[]

}