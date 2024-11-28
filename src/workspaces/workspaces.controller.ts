import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common'
import { CreateWorkspaceDto } from './dto/create-workspace.dto'
import { WorkspacesService } from './workspaces.service'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import { Workspace } from './workspaces.model'
import { AccessTokenGuard } from '../common/guards/access-token.guard'

@ApiTags('Workspaces')
@Controller('workspaces')
export class WorkspacesController {

  constructor(private workspacesService: WorkspacesService) {}

  @ApiOperation({summary: 'Create workspace'})
  @ApiResponse({status: 200, type: Workspace})
  @UseGuards(AccessTokenGuard)
  @Post()
  create(@Body() workspaceDto: CreateWorkspaceDto) {
    return this.workspacesService.createWorkspace(workspaceDto)
  }

  @ApiOperation({summary: 'Get workspace'})
  @ApiResponse({status: 200, type: Workspace})
  @UseGuards(AccessTokenGuard)
  @Get()
  get(@Body() admin_email: string) {
    return this.workspacesService.getWorkspace(admin_email)
  }
}