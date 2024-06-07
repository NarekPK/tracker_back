// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateIssueMediaDto {
  readonly name: string
  readonly file_path: string
  readonly position: string
  readonly issue_id: string
}