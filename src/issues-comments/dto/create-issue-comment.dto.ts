// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateIssueCommentDto {
  readonly text: string
  readonly issue_id: string
  readonly user_id: string
  readonly comment_id: string
}