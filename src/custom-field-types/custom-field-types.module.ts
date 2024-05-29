import { Module } from '@nestjs/common'
import { CustomFieldTypesService } from './custom-field-types.service'
import { CustomFieldTypesController } from './custom-field-types.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { CustomFieldType } from '../custom-field-types/custom-field-types.model'

@Module({
  providers: [CustomFieldTypesService],
  controllers: [CustomFieldTypesController],
  imports: [
    SequelizeModule.forFeature([CustomFieldType])
  ],
})
export class CustomFieldTypesModule {}
