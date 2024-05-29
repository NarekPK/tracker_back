import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript'
// import {ApiProperty} from '@nestjs/swagger'
import { CustomField } from '../custom-fields/custom-fields.model'

export interface CustomFieldTypeCreationAttrs {
  field_type: string
  category: string
  name: string
  is_multiple: boolean
}

@Table({tableName: 'custom_field_types'})
export class CustomFieldType extends Model<CustomFieldType, CustomFieldTypeCreationAttrs> {

  @Column({ type: DataType.STRING, allowNull: false, primaryKey: true })
  field_type: string

  @Column({ type: DataType.STRING, allowNull: false })
  category: string

  @Column({ type: DataType.STRING, allowNull: false })
  name: string
  
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  is_multiple: boolean

  @HasMany(() => CustomField, 'field_type')
  custom_fields: CustomField[]

}