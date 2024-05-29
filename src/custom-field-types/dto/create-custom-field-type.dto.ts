// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateCustomFieldTypeDto {

  // @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
  // @IsString({message: 'Должно быть строкой'})
  // @IsEmail({}, {message: 'Некорректный email'})
  readonly field_type: string
  readonly category: string
  readonly name: string
  readonly is_multiple: boolean
}