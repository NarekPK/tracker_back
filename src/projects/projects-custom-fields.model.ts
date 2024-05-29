import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { CustomField } from '../custom-fields/custom-fields.model'
import { Project } from './projects.model'


@Table({tableName: 'projects_custom_fields', createdAt: false, updatedAt: false})
export class ProjectCustomField extends Model<ProjectCustomField> {

  @ForeignKey(() => Project)
  @Column({ type: DataType.UUID, primaryKey: true })
  project_id: string

  @ForeignKey(() => CustomField)
  @Column({ type: DataType.UUID, primaryKey: true })
  custom_field_id: string

  @Column({ type: DataType.SMALLINT, allowNull: false })
  position: string

}