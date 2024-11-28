import { ApiProperty } from '@nestjs/swagger'

export class CreatePermissionDto {

  @ApiProperty({ example: 'create_issue', description: 'Key'})
  readonly permission_key: string

  @ApiProperty({ example: '22', description: 'Id'})
  readonly permission_id: string

  @ApiProperty({ example: 'PN_CREATE_ISSUE', description: 'Name'})
  readonly name: string

  @ApiProperty({ example: 'Create new issue', description: 'Description'})
  readonly description: string

  @ApiProperty({ example: false, description: 'Is global or not'})
  readonly global: boolean

  @ApiProperty({ example: 'PE_ISSUE', description: 'Entity type'})
  readonly entity_type: string

  @ApiProperty({ example: 'PO_CREATE', description: 'Operation'})
  readonly operation: string

  @ApiProperty({ example: [null], description: 'Dependent permissions'})
  readonly dependent_permissions: TRelatedPermission[]

  @ApiProperty({ example: [null], description: 'Implied permissions'})
  readonly implied_permissions: TRelatedPermission[]
}

export type TRelatedPermission = {
  permission_key: string
  permission_id: string
  name: string
}