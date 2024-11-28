import { ApiProperty } from '@nestjs/swagger'

export class CreateRoleDto {

  @ApiProperty({ example: 'RN_ADMIN', description: 'Name'})
  readonly name: string

  @ApiProperty({ example: 'RD_ADMIN', description: 'Description'})
  readonly description: string

  @ApiProperty({ example: ["profile_updateself", "user_read_basic"], description: 'Permissions'})
  readonly permissions: string[]
  
  readonly role_id: string
  
  readonly workspace_id: string
}