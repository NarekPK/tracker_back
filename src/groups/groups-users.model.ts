import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { User } from '../users/users.model'
import { Group } from './groups.model'


@Table({tableName: 'groups_users', createdAt: false, updatedAt: false})
export class GroupUser extends Model<GroupUser> {

  @ForeignKey(() => Group)
  @Column({ type: DataType.UUID, primaryKey: true })
  group_id: string

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, primaryKey: true })
  user_id: string

}