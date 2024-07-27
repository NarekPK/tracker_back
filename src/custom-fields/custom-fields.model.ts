import { Column, DataType, Model, Table, BelongsTo, ForeignKey, BelongsToMany, HasMany } from 'sequelize-typescript'
import { Workspace } from '../workspaces/workspaces.model'
import { CustomFieldType } from '../custom-field-types/custom-field-types.model'
import { Project } from '../projects/projects.model'
import { ProjectCustomField } from '../projects/projects-custom-fields.model'
import { TCustomFieldOption } from './dto/create-custom-field.dto'

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

  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false })
  custom_field_id: string

  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @Column({ type: DataType.STRING, allowNull: true })
  default_value: string

  @Column({ type: DataType.STRING, defaultValue: '', allowNull: false })
  key: string
  
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  can_be_empty: boolean

  @Column({ type: DataType.STRING, allowNull: true })
  empty_value: string

  @Column({ type: DataType.JSONB, allowNull: true })
  options: TCustomFieldOption[]

  // @Column({ type: DataType.BOOLEAN, allowNull: false })
  // hidden: boolean

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