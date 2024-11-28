import { Controller, Body, Get, Post, UseGuards } from '@nestjs/common'
import { CustomFieldTypesService } from './custom-field-types.service'
import { CreateCustomFieldTypeDto } from './dto/create-custom-field-type.dto'
import { AccessTokenGuard } from '../common/guards/access-token.guard'

@Controller('custom-field-types')
export class CustomFieldTypesController {

  constructor(private customFieldTypesService: CustomFieldTypesService) {}

  @UseGuards(AccessTokenGuard)
  @Post()
  create(@Body() customFieldTypeDto: CreateCustomFieldTypeDto) {
    return this.customFieldTypesService.createCustomFieldType(customFieldTypeDto)
  }

  @UseGuards(AccessTokenGuard)
  @Get()
  getCustomFieldTypes() {
    return this.customFieldTypesService.getCustomFieldTypes()
  }
}
