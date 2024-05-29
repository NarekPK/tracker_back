import { Controller, Body, Get, Post, UseGuards } from '@nestjs/common'
import { PermissionsService } from './permissions.service'
import { CreatePermissionDto } from './dto/create-permission.dto'
import { AccessTokenGuard } from '../common/guards/access-token.guard'

@Controller('permissions')
export class PermissionsController {

  constructor(private permissionsService: PermissionsService) {}

  // @ApiOperation({summary: 'Создание пользователя'})
  // @ApiResponse({status: 200, type: User})
  // @Post()
  // create(@Body() permissionDto: CreatePermissionDto) {
  //   return this.permissionsService.createPermission(permissionDto)
  // }

  // @ApiOperation({summary: 'Получить всех пользователей'})
  // @ApiResponse({status: 200, type: [User]})
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  // @Get()
  // getPermissions() {
  //   return this.permissionsService.getPermissions()
  // }

  // @Post('create')
  // createPermissions() {
  //   return this.permissionsService.createPermissions()
  // }

  @UseGuards(AccessTokenGuard)
  @Get('get-base-permissions')
  getBasePermissions() {
    return this.permissionsService.getBasePermissions()
  }
}
