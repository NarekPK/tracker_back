import { ApiProperty } from '@nestjs/swagger'

export class CreateCustomFieldDto {

  @ApiProperty({ example: 'CF_PRIORITY', description: 'Name'})
  readonly name: string

  @ApiProperty({ example: 'CF_NORMAL', description: 'Default value'})
  readonly default_value: string

  @ApiProperty({ example: 'priority', description: 'Key'})
  readonly key: string

  @ApiProperty({ example: true, description: 'Can be empty'})
  readonly can_be_empty: boolean

  @ApiProperty({ example: 'CF_NO_PRIORITY', description: 'Empty value'})
  readonly empty_value: string

  @ApiProperty({ example: [], description: 'Options'})
  readonly options: TCustomFieldOption[]

  // readonly hidden: boolean

  @ApiProperty({ example: 'single_enum', description: 'Field type'})
  readonly field_type: string

  readonly workspace_id: string
}

export type TCustomFieldOption = {
  id: string
  name: string
}