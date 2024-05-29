import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common'
import { CreateWorkspaceDto } from './dto/create-workspace.dto'
import { WorkspacesService } from './workspaces.service'
// import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import { Workspace } from './workspaces.model'
// import {JwtAuthGuard} from '../auth/jwt-auth.guard'
// import {Roles} from '../auth/roles-auth.decorator'
// import {RolesGuard} from '../auth/roles.guard'
// import {AddRoleDto} from './dto/add-role.dto'
// import {BanUserDto} from './dto/ban-user.dto'
// import {ValidationPipe} from '../pipes/validation.pipe'

// @ApiTags('Клиенты')
@Controller('workspaces')
export class WorkspacesController {

  constructor(private workspacesService: WorkspacesService) {}

  // @ApiOperation({summary: 'Создание пользователя'})
  // @ApiResponse({status: 200, type: Workspace})
  @Post()
  create(@Body() workspaceDto: CreateWorkspaceDto) {
    return this.workspacesService.createWorkspace(workspaceDto)
  }

  // @ApiOperation({summary: 'Получить всех пользователей'})
  // @ApiResponse({status: 200, type: [Workspace]})
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  @Get()
  getOne(@Body() admin_email: string) {
    return this.workspacesService.getWorkspace(admin_email)
  }

  // @ApiOperation({summary: 'Выдать роль'})
  // @ApiResponse({status: 200})
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  // @Post('/role')
  // addRole(@Body() dto: AddRoleDto) {
  //     return this.usersService.addRole(dto);
  // }
}