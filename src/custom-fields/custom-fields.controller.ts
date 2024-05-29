import { Controller, Body, Get, Post } from '@nestjs/common'
import { CustomFieldsService } from './custom-fields.service'
import { CreateCustomFieldDto } from './dto/create-custom-field.dto'

@Controller('custom-fields')
export class CustomFieldsController {

  constructor(private customFieldsService: CustomFieldsService) {}

  // @ApiOperation({summary: 'Создание пользователя'})
  // @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() customFieldDto: CreateCustomFieldDto) {
    return this.customFieldsService.createCustomField(customFieldDto)
  }

  // @ApiOperation({summary: 'Получить всех пользователей'})
  // @ApiResponse({status: 200, type: [User]})
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  @Get()
  getCustomFields() {
    return this.customFieldsService.getCustomFields()
  }
}
