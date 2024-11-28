import { ApiProperty } from '@nestjs/swagger'

export class CreateIssueCommentDto {
  readonly comment_id: string

  @ApiProperty({ example: 'Comment', description: 'Text'})
  readonly text: string

  @ApiProperty({ example: null, description: 'Comment replied to id'})
  readonly comment_replied_to_id: string

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Issue id'})
  readonly issue_id: string

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'User id'})
  readonly user_id: string
}
