import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common'
import { CreateGroupDto } from './dto/create-group.dto'
import { GroupsService } from './groups.service'
import { Group } from './groups.model'
import { AccessTokenGuard } from '../common/guards/access-token.guard'

@Controller('groups')
export class GroupsController {

  constructor(private groupsService: GroupsService) {}

  @UseGuards(AccessTokenGuard)
  @Post()
  create(@Body() groupDto: CreateGroupDto) {
    return this.groupsService.createGroup(groupDto)
  }

  @UseGuards(AccessTokenGuard)
  @Get()
  getWorkspaceGroups(@Body() workspace_id: string) {
    return this.groupsService.getWorkspaceGroups(workspace_id)
  }

}