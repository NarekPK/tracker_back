import { Injectable } from '@nestjs/common'
import { CustomField } from './custom-fields.model'
import { InjectModel } from '@nestjs/sequelize'
import { CreateCustomFieldDto } from './dto/create-custom-field.dto'
import { baseCustomFields } from './base-custom-fields'
import { ProjectCustomField } from 'src/projects/projects-custom-fields.model'

@Injectable()
export class CustomFieldsService {
  constructor(@InjectModel(CustomField) private customFieldRepository: typeof CustomField) {}

  // async createCustomField(dto: CreateCustomFieldDto) {
  //   const customField = await this.customFieldRepository.create(dto)
  //   return customField
  // }

  async getAllCustomFields(workspace_id: string) {
    const customFields = await this.customFieldRepository.findAll({
      where: { workspace_id },
      include: {
        model: ProjectCustomField,
        attributes: ['position', 'project_id']
      }
    })
    return customFields
  }

  async createBaseCustomFields(workspace_id: string) {
    const customFields = await this.customFieldRepository.bulkCreate(baseCustomFields.map(f => { return { ...f, workspace_id } }))
    return customFields
  }

  async deleteCustomField(custom_field_id: string) {
    await this.customFieldRepository.destroy({ where: { custom_field_id }})
    return { deleted: true }
  }
}
