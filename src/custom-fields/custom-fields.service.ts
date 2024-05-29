import { Injectable } from '@nestjs/common'
import { CustomField } from './custom-fields.model'
import { InjectModel } from '@nestjs/sequelize'
import { CreateCustomFieldDto } from './dto/create-custom-field.dto'

@Injectable()
export class CustomFieldsService {
  constructor(@InjectModel(CustomField) private customFieldRepository: typeof CustomField) {}

  async createCustomField(dto: CreateCustomFieldDto) {
    const customField = await this.customFieldRepository.create(dto)
    // const role = await this.roleService.getRoleByValue('ADMIN')
    // await user.$set('roles', [role.id])
    // user.roles = [role]
    return customField
  }

  async getCustomFields() {
    const customFields = await this.customFieldRepository.findAll({include: { all: true }})
    return customFields
  }
}
