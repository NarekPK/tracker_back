import { Controller, Body, Get, Post, Delete, Req, UseGuards } from '@nestjs/common'
import { CustomFieldsService } from './custom-fields.service'
import { CreateCustomFieldDto } from './dto/create-custom-field.dto'
import { AccessTokenGuard } from '../common/guards/access-token.guard'
import { Request } from 'express'

@Controller('custom-fields')
export class CustomFieldsController {

  constructor(private customFieldsService: CustomFieldsService) {}

  // @ApiOperation({summary: 'Создание пользователя'})
  // @ApiResponse({status: 200, type: User})
  // @Post()
  // create(@Body() customFieldDto: CreateCustomFieldDto) {
  //   return this.customFieldsService.createCustomField(customFieldDto)
  // }

  // @ApiOperation({summary: 'Получить всех пользователей'})
  // @ApiResponse({status: 200, type: [User]})
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  // @Get()
  // getCustomFields() {
  //   return this.customFieldsService.getCustomFields()
  // }

  @UseGuards(AccessTokenGuard)
  @Get('get-all-custom-fields')
  getAllCustomFields(@Req() request: Request) {
    return this.customFieldsService.getAllCustomFields(request.user['workspace_id'])
  }

  @UseGuards(AccessTokenGuard)
  @Delete('delete-custom-field')
  deleteCustomField(@Body() fieldInfo: { custom_field_id: string }) {
    return this.customFieldsService.deleteCustomField(fieldInfo)
  }
}
