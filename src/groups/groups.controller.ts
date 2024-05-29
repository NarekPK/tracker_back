import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common'
import { CreateGroupDto } from './dto/create-group.dto'
import { GroupsService } from './groups.service'
// import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Group } from './groups.model'
// import { JwtAuthGuard } from '../auth/jwt-auth.guard'
// import { ValidationPipe } from '../pipes/validation.pipe'

// @ApiTags('Пользователи')
@Controller('groups')
export class GroupsController {

  constructor(private groupsService: GroupsService) {}

  // @ApiOperation({summary: 'Создание пользователя'})
  // @ApiResponse({status: 200, type: Group})
  @Post()
  create(@Body() groupDto: CreateGroupDto) {
    return this.groupsService.createGroup(groupDto)
  }

  // @ApiOperation({summary: 'Получить всех пользователей'})
  // @ApiResponse({status: 200, type: [Group]})
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  @Get()
  getWorkspaceGroups(@Body() workspace_id: string) {
    return this.groupsService.getWorkspaceGroups(workspace_id)
  }

}