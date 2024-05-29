// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreatePermissionDto {

  // @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
  // @IsString({message: 'Должно быть строкой'})
  // @IsEmail({}, {message: 'Некорректный email'})
  readonly permission_key: string
  readonly name: string
  readonly description: string
  readonly global: boolean
  readonly entity_type: string
  readonly operation: string
  readonly dependent_permissions: TRelatedPermission[]
  readonly implied_permissions: TRelatedPermission[]
}

export type TRelatedPermission = {
  permission_key: string
  permission_id: string
  name: string
}