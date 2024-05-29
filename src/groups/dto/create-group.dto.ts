// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateGroupDto {

  // @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
  // @IsString({message: 'Должно быть строкой'})
  // @IsEmail({}, {message: 'Некорректный email'})
  readonly name: string
  readonly workspace_id: string
}