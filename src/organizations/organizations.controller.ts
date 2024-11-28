import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { OrganizationsService } from './organizations.service'
import { CreateOrganizationDto } from './dto/create-organization.dto'
import { AccessTokenGuard } from '../common/guards/access-token.guard'

@Controller('organizations')
export class OrganizationsController {
  constructor(private organizationsService: OrganizationsService) {}

  @UseGuards(AccessTokenGuard)
  @Post()
  create(@Body() dto: CreateOrganizationDto) {
    return this.organizationsService.createOrganization(dto)
  }

  @UseGuards(AccessTokenGuard)
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.organizationsService.getOrganizationByValue(value)
  }
}