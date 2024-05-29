import { Controller, Body, Get, Post } from '@nestjs/common'
import { CustomFieldTypesService } from './custom-field-types.service'
import { CreateCustomFieldTypeDto } from './dto/create-custom-field-type.dto'

@Controller('custom-field-types')
export class CustomFieldTypesController {

  constructor(private customFieldTypesService: CustomFieldTypesService) {}

  // @ApiOperation({summary: 'Создание пользователя'})
  // @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() customFieldTypeDto: CreateCustomFieldTypeDto) {
    return this.customFieldTypesService.createCustomFieldType(customFieldTypeDto)
  }

  // @ApiOperation({summary: 'Получить всех пользователей'})
  // @ApiResponse({status: 200, type: [User]})
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  @Get()
  getCustomFieldTypes() {
    return this.customFieldTypesService.getCustomFieldTypes()
  }
}
