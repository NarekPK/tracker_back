import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Organization } from './organizations.model'
import { CreateOrganizationDto } from './dto/create-organization.dto'

@Injectable()
export class OrganizationsService {

  constructor(@InjectModel(Organization) private organizationRepository: typeof Organization) {}

  async createOrganization(dto: CreateOrganizationDto) {
    const organization = await this.organizationRepository.create(dto)
    return organization
  }

  async getOrganizationByValue(value: string) {
    const organization = await this.organizationRepository.findOne({where: {value}})
    return organization
  }

}