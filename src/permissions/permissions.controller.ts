import { Controller, Body, Get, Post, UseGuards } from '@nestjs/common'
import { PermissionsService } from './permissions.service'
import { CreatePermissionDto } from './dto/create-permission.dto'
import { Permission } from './permissions.model'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AccessTokenGuard } from '../common/guards/access-token.guard'

@ApiTags('Permissions')
@Controller('permissions')
export class PermissionsController {

  constructor(private permissionsService: PermissionsService) {}

  @ApiOperation({summary: 'Get base permissions'})
  @ApiResponse({status: 200, type: [Permission]})
  @UseGuards(AccessTokenGuard)
  @Get()
  getBasePermissions() {
    return this.permissionsService.getBasePermissions()
  }
}
