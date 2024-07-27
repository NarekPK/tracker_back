// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateBoardDto {
  readonly board_id?: string
  readonly name: string
  readonly columns_field_id?: string
  readonly columns_options?: TBoardEnumOption[]
  readonly rows_field_id?: string
  readonly rows_options?: TBoardEnumOption[]
  readonly workspace_id: string
}

export type TBoardEnumOption = {
  fields: { id: string, name: string }[]
  position: number
}