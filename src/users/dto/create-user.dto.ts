import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateUserDto {
  // @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Unique identifier'})
  readonly user_id?: string

  @ApiProperty({ example: 'admin', description: 'Name'})
  readonly user_name?: string

  @ApiProperty({ example: 'admin', description: 'Profile name'})
  readonly profile_name?: string

  @ApiProperty({example: 'user@mail.ru', description: 'Email'})
  // @IsString({message: 'Должно быть строкой'})
  // @IsEmail({}, {message: 'Некорректный email'})
  readonly email?: string

  @ApiProperty({example: '12345678', description: 'Password'})
  readonly password?: string

  @ApiProperty({example: 'en-US', description: 'Language'})
  readonly lang?: string

  // @ApiProperty({example: 'token', description: 'Refresh token'})
  readonly refresh_token?: string

  readonly workspace_id?: string
}