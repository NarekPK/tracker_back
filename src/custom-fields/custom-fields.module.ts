import { Module } from '@nestjs/common'
import { CustomFieldsService } from './custom-fields.service'
import { CustomFieldsController } from './custom-fields.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { CustomFieldType } from '../custom-field-types/custom-field-types.model'
import { CustomField } from '../custom-fields/custom-fields.model'
import { Workspace } from '../workspaces/workspaces.model'

@Module({
  providers: [CustomFieldsService],
  controllers: [CustomFieldsController],
  imports: [
    SequelizeModule.forFeature([CustomField, CustomFieldType, Workspace])
  ],
})
export class CustomFieldsModule {}
