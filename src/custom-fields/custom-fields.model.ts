import { Column, DataType, Model, Table, BelongsTo, ForeignKey, BelongsToMany, HasMany } from 'sequelize-typescript'
import { Workspace } from '../workspaces/workspaces.model'
import { CustomFieldType } from '../custom-field-types/custom-field-types.model'
import { Project } from '../projects/projects.model'
import { ProjectCustomField } from '../projects/projects-custom-fields.model'
import { TCustomFieldOption } from './dto/create-custom-field.dto'
import {ApiProperty} from '@nestjs/swagger'

export interface CustomFieldCreationAttrs {
  name: string
  can_be_empty: boolean
  options: TCustomFieldOption[]
  // hidden: boolean
  field_type: string
  workspace_id: string
}

@Table({tableName: 'custom_fields', createdAt: false, updatedAt: false })
export class CustomField extends Model<CustomField, CustomFieldCreationAttrs> {

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Unique identifier'})
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  custom_field_id: string

  @ApiProperty({ example: 'CF_PRIORITY', description: 'Name'})
  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @ApiProperty({ example: 'CF_NORMAL', description: 'Default value'})
  @Column({ type: DataType.STRING, allowNull: true })
  default_value: string

  @ApiProperty({ example: 'priority', description: 'Key'})
  @Column({ type: DataType.STRING, defaultValue: '', allowNull: false })
  key: string
  
  @ApiProperty({ example: true, description: 'Can be empty'})
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  can_be_empty: boolean

  @ApiProperty({ example: 'CF_NO_PRIORITY', description: 'Empty value'})
  @Column({ type: DataType.STRING, allowNull: true })
  empty_value: string

  @ApiProperty({ example: [], description: 'Options'})
  @Column({ type: DataType.JSONB, allowNull: true })
  options: TCustomFieldOption[]

  // @Column({ type: DataType.BOOLEAN, allowNull: false })
  // hidden: boolean

  @ApiProperty({ example: 'single_enum', description: 'Field type'})
  @ForeignKey(() => CustomFieldType)
  @Column({ type: DataType.STRING, allowNull: false })
  field_type: string

  @BelongsTo(() => CustomFieldType, 'field_type')
  custom_field_type: CustomFieldType

  @ForeignKey(() => Workspace)
  @Column({ type: DataType.UUID, allowNull: false })
  workspace_id: string

  @BelongsTo(() => Workspace, 'workspace_id')
  workspace: Workspace

  @BelongsToMany(() => Project, { through: { model: () => ProjectCustomField, unique: false } })
  projects: Project[]

  @HasMany(() => ProjectCustomField, 'custom_field_id')
  project_custom_fields: ProjectCustomField[]

}