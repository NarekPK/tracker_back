import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { OrganizationsService } from './organizations.service'
import { CreateOrganizationDto } from './dto/create-organization.dto'

@Controller('organizations')
export class OrganizationsController {
  constructor(private organizationsService: OrganizationsService) {}

  @Post()
  create(@Body() dto: CreateOrganizationDto) {
    return this.organizationsService.createOrganization(dto)
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.organizationsService.getOrganizationByValue(value)
  }
}