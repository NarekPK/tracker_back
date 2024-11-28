import { Body, Controller, Get, Param, Post, Req, UseGuards, Patch, Delete } from '@nestjs/common'
import { RolesService } from './roles.service'
import { CreateRoleDto } from './dto/create-role.dto'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AccessTokenGuard } from '../common/guards/access-token.guard'
import { Request } from 'express'
import { Role } from './roles.model'

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @ApiOperation({summary: 'Create role'})
  @ApiResponse({status: 200, type: Role})
  @UseGuards(AccessTokenGuard)
  @Post()
  createRole(@Body() roleDto: CreateRoleDto) {
    return this.rolesService.createRole(roleDto)
  }

  @ApiOperation({summary: 'Get current workspace roles'})
  @ApiResponse({status: 200, type: [Role]})
  @UseGuards(AccessTokenGuard)
  @Get()
  getWorkspaceRoles(@Req() request: Request) {
    return this.rolesService.getWorkspaceRoles(request.user['workspace_id'])
  }

  @ApiOperation({summary: 'Get role'})
  @ApiResponse({status: 200, type: Role})
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  getRoleById(@Param('id') id: string) {
    return this.rolesService.getRoleById(id)
  }

  @ApiOperation({summary: 'Update role'})
  @ApiResponse({status: 200, type: Role})
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  updateRole(@Param('id') id: string, @Body() roleDto: CreateRoleDto) {
    return this.rolesService.updateRole(id, roleDto)
  }

  @ApiOperation({summary: 'Delete role'})
  @ApiResponse({status: 200, type: Boolean })
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  deleteRole(@Param('id') id: string) {
    return this.rolesService.deleteRole(id)
  }

  // @Post()
  // createBaseRoles() {
  //   return this.rolesService.createBaseRoles()
  // }
}