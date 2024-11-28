import { ApiProperty } from '@nestjs/swagger'

export class CreateBoardDto {
  readonly board_id?: string

  @ApiProperty({ example: 'Board', description: 'Name'})
  readonly name: string

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Columns field id'})
  readonly columns_field_id?: string

  @ApiProperty({ example: [], description: 'Columns options'})
  readonly columns_options?: TBoardEnumOption[]

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Rows field id'})
  readonly rows_field_id?: string

  @ApiProperty({ example: [], description: 'Rows options'})
  readonly rows_options?: TBoardEnumOption[]

  readonly workspace_id: string

  readonly project_id?: string
}

export type TBoardEnumOption = {
  fields: { id: string, name: string }[]
  position: number
}