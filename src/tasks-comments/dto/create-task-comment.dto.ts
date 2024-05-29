// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateTaskCommentDto {
  readonly text: string
  readonly task_id: string
  readonly user_id: string
}