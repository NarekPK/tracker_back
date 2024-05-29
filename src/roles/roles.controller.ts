import { Body, Controller, Get, Param, Post, Req, UseGuards, Patch, Delete } from '@nestjs/common'
import { RolesService } from './roles.service'
import { CreateRoleDto } from './dto/create-role.dto'
import { AccessTokenGuard } from '../common/guards/access-token.guard'
import { Request } from 'express'

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  // @Post()
  // create(@Body() dto: CreateRoleDto) {
  //   return this.rolesService.createRole(dto)
  // }

  @UseGuards(AccessTokenGuard)
  @Post('create-role')
  createRole(@Body() roleDto: CreateRoleDto) {
    return this.rolesService.createRole(roleDto)
  }

  @UseGuards(AccessTokenGuard)
  @Get('get-roles')
  getWorkspaceRoles(@Req() request: Request) {
    return this.rolesService.getWorkspaceRoles(request.user['workspace_id'])
  }

  @UseGuards(AccessTokenGuard)
  @Get('get-role/:id')
  getRoleById(@Param('id') id: string) {
    return this.rolesService.getRoleById(id)
  }

  @UseGuards(AccessTokenGuard)
  @Patch('update-role')
  updateRole(@Body() roleDto: CreateRoleDto) {
    return this.rolesService.updateRole(roleDto)
  }

  @UseGuards(AccessTokenGuard)
  @Delete('delete-role')
  deleteRole(@Body() roleInfo: { role_id: string }) {
    return this.rolesService.deleteRole(roleInfo)
  }

  // @Post('create')
  // createBaseRoles() {
  //   return this.rolesService.createBaseRoles()
  // }
}