import { ApiProperty } from '@nestjs/swagger'

export class CreateIssueDto {

  @ApiProperty({ example: 'Issue №1', description: 'Name'})
  readonly name: string

  @ApiProperty({ example: 'Description', description: 'Description'})
  readonly description: string

  @ApiProperty({ example: [], description: 'Custom fields'})
  readonly custom_fields: TIssueCustomField[]

  readonly issue_id: string

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Author'})
  readonly issue_author: string

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Project id'})
  readonly project_id: string
}

export type TIssueCustomField = {
  id: string
  value: string | [] | {}
  option_id?: string
}