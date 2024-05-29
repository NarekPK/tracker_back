// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateRoleDto {
  readonly name: string
  readonly description: string
  readonly permissions: string[]
  readonly role_id: string
  readonly workspace_id: string
}