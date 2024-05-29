// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateTaskMediaDto {
  readonly name: string
  readonly file_path: string
  readonly position: string
  readonly task_id: string
}