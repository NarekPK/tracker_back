import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Project } from '../projects/projects.model'
import { Organization } from './organizations.model'


@Table({tableName: 'organizations_projects', createdAt: false, updatedAt: false})
export class OrganizationProject extends Model<OrganizationProject> {

  @ForeignKey(() => Organization)
  @Column({ type: DataType.UUID, primaryKey: true })
  org_id: string

  @ForeignKey(() => Project)
  @Column({ type: DataType.UUID, primaryKey: true })
  project_id: string

}