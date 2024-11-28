import { Injectable } from '@nestjs/common'
import { CustomFieldType } from './custom-field-types.model'
import { InjectModel } from '@nestjs/sequelize'
import { CreateCustomFieldTypeDto } from './dto/create-custom-field-type.dto'
import { baseCustomFieldTypes } from './base-custom-field-types'

@Injectable()
export class CustomFieldTypesService {
  constructor(@InjectModel(CustomFieldType) private customFieldTypeRepository: typeof CustomFieldType) {
    // this.createBaseCustomFieldTypes()
  }

  async createCustomFieldType(dto: CreateCustomFieldTypeDto) {
    const customFieldType = await this.customFieldTypeRepository.create(dto)
    return customFieldType
  }

  async getCustomFieldTypes() {
    const customFieldTypes = await this.customFieldTypeRepository.findAll({include: { all: true }})
    return customFieldTypes
  }

  async createBaseCustomFieldTypes() {
    const customFieldTypes = await this.customFieldTypeRepository.bulkCreate(baseCustomFieldTypes)
    return customFieldTypes
  }
}
