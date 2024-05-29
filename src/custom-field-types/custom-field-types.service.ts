import { Injectable } from '@nestjs/common'
import { CustomFieldType } from './custom-field-types.model'
import { InjectModel } from '@nestjs/sequelize'
import { CreateCustomFieldTypeDto } from './dto/create-custom-field-type.dto'

@Injectable()
export class CustomFieldTypesService {
  constructor(@InjectModel(CustomFieldType) private customFieldTypeRepository: typeof CustomFieldType) {}

  async createCustomFieldType(dto: CreateCustomFieldTypeDto) {
    const customFieldType = await this.customFieldTypeRepository.create(dto)
    // const role = await this.roleService.getRoleByValue('ADMIN')
    // await user.$set('roles', [role.id])
    // user.roles = [role]
    return customFieldType
  }

  async getCustomFieldTypes() {
    const customFieldTypes = await this.customFieldTypeRepository.findAll({include: { all: true }})
    return customFieldTypes
  }
}
