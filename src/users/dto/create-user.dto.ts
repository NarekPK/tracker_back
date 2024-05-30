// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateUserDto {

  // @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
  // @IsString({message: 'Должно быть строкой'})
  // @IsEmail({}, {message: 'Некорректный email'})
  readonly email?: string
  readonly password?: string
  readonly user_name?: string
  readonly user_id?: string
  readonly profile_name?: string
  readonly workspace_id?: string
  readonly refresh_token?: string
}