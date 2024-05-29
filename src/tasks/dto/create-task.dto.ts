// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateTaskDto {
  readonly name: string
  readonly custom_fields_value: string
  readonly project_id: string
}