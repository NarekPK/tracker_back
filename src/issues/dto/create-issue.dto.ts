// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateIssueDto {
  readonly name: string
  readonly description: string
  readonly custom_fields: TIssueCustomField[]
  readonly issue_id: string
  readonly project_id: string
}

export type TIssueCustomField = {
  id: string
  value: string | [] | {}
  option_id?: string
}