import { Body, Controller, Get, Param, Post, Delete, Patch, Req, UseGuards, Type } from '@nestjs/common'
import { ProjectsService } from './projects.service'
import { CreateProjectDto, TProjectRole, TProjectUserRole } from './dto/create-project.dto'
import { AccessTokenGuard } from '../common/guards/access-token.guard'
import { Request } from 'express'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Project } from './projects.model'
import { ProjectUserRole } from './projects-users-roles.model'
import { CustomField } from 'src/custom-fields/custom-fields.model'

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @ApiOperation({summary: 'Create project'})
  @ApiResponse({status: 200, type: Project})
  @UseGuards(AccessTokenGuard)
  @Post()
  createProject(@Body() projectDto: CreateProjectDto) {
    return this.projectsService.createProject(projectDto)
  }

  @ApiOperation({summary: 'Get current workspace projects'})
  @ApiResponse({status: 200, type: [Project]})
  @UseGuards(AccessTokenGuard)
  @Get()
  getWorkspaceProjects(@Req() request: Request) {
    return this.projectsService.getWorkspaceProjects(request.user['workspace_id'])
  }

  @ApiOperation({summary: 'Get project'})
  @ApiResponse({status: 200, type: Project})
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  getProjectById(@Param('id') id: string) {
    return this.projectsService.getProjectById(id)
  }

  @ApiOperation({summary: 'Update project'})
  @ApiResponse({status: 200, type: Project})
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  updateProject(@Param('id') id: string, @Body() projectDto: CreateProjectDto) {
    return this.projectsService.updateProject(id, projectDto)
  }

  @ApiOperation({summary: 'Delete project'})
  @ApiResponse({status: 200, type: Boolean })
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  deleteProject(@Param('id') id: string) {
    return this.projectsService.deleteProject(id)
  }

  @ApiOperation({summary: 'Get project roles'})
  @ApiResponse({status: 200, type: [ProjectUserRole] })
  @UseGuards(AccessTokenGuard)
  @Get(':id/roles')
  getProjectRoles(@Param('id') id: string) {
    return this.projectsService.getProjectRoles({ project_id: id })
  }

  @ApiOperation({summary: 'Create project\'s role'})
  @ApiResponse({status: 200, type: Boolean})
  @UseGuards(AccessTokenGuard)
  @Post(':id/roles')
  createProjectRole(@Param('id') id: string, @Body() projectRole: TProjectRole) {
    return this.projectsService.createProjectRole(id, projectRole)
  }

  @ApiOperation({summary: 'Delete project\'s role'})
  @ApiResponse({status: 200, type: Boolean })
  @UseGuards(AccessTokenGuard)
  @Delete(':id/roles')
  async deleteProjectRoles(@Param('id') id: string, @Body() projectRoles: TProjectUserRole[]) {
    return await this.projectsService.deleteProjectRoles(id, projectRoles)
  }

  @ApiOperation({summary: 'Get project custom fields'})
  @ApiResponse({status: 200, type: [CustomField] })
  @UseGuards(AccessTokenGuard)
  @Get(':id/custom-fields')
  getProjectCustomFields(@Param('id') id: string) {
    return this.projectsService.getProjectCustomFields({ project_id: id })
  }
}