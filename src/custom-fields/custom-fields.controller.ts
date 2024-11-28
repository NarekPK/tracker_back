import { Controller, Body, Get, Post, Delete, Req, UseGuards, Param } from '@nestjs/common'
import { CustomFieldsService } from './custom-fields.service'
import { CreateCustomFieldDto } from './dto/create-custom-field.dto'
import { AccessTokenGuard } from '../common/guards/access-token.guard'
import { Request } from 'express'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CustomField } from './custom-fields.model'

@ApiTags('Custom fields')
@Controller('custom-fields')
export class CustomFieldsController {

  constructor(private customFieldsService: CustomFieldsService) {}

  @ApiOperation({summary: 'Get current workspace custom fields'})
  @ApiResponse({status: 200, type: [CustomField]})
  @UseGuards(AccessTokenGuard)
  @Get()
  getAllCustomFields(@Req() request: Request) {
    return this.customFieldsService.getAllCustomFields(request.user['workspace_id'])
  }

  @ApiOperation({summary: 'Delete custom field'})
  @ApiResponse({status: 200, type: Boolean })
  @UseGuards(AccessTokenGuard)
  @Delete('id')
  deleteCustomField(@Param('id') id: string) {
    return this.customFieldsService.deleteCustomField(id)
  }
}
