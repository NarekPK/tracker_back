// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateCustomFieldDto {
  readonly name: string
  readonly can_be_empty: boolean
  readonly options: TCustomFieldOption[]
  // readonly hidden: boolean
  readonly field_type: string
  readonly workspace_id: string
}

export type TCustomFieldOption = {
  id: string
  name: string
}