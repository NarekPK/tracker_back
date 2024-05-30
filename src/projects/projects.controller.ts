import { Body, Controller, Get, Param, Post, Delete, Patch, Req, UseGuards } from '@nestjs/common'
import { ProjectsService } from './projects.service'
import { CreateProjectDto, TProjectRole, TProjectUserRole } from './dto/create-project.dto'
import { AccessTokenGuard } from '../common/guards/access-token.guard'
import { Request } from 'express'

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @UseGuards(AccessTokenGuard)
  @Post('create-project')
  createProject(@Body() projectDto: CreateProjectDto) {
    return this.projectsService.createProject(projectDto)
  }

  @UseGuards(AccessTokenGuard)
  @Get('get-projects')
  getWorkspaceProjects(@Req() request: Request) {
    return this.projectsService.getWorkspaceProjects(request.user['workspace_id'])
  }

  @UseGuards(AccessTokenGuard)
  @Get('get-project/:id')
  getProjectById(@Param('id') id: string) {
    return this.projectsService.getProjectById(id)
  }

  @UseGuards(AccessTokenGuard)
  @Patch('update-project')
  updateProject(@Body() projectDto: CreateProjectDto) {
    return this.projectsService.updateProject(projectDto)
  }

  @UseGuards(AccessTokenGuard)
  @Delete('delete-project')
  deleteProject(@Body() projectInfo: { project_id: string }) {
    return this.projectsService.deleteProject(projectInfo)
  }

  @UseGuards(AccessTokenGuard)
  @Get('get-project-roles/:id')
  getProjectRoles(@Param('id') id: string) {
    return this.projectsService.getProjectRoles({ project_id: id })
  }

  @UseGuards(AccessTokenGuard)
  @Post('create-project-role')
  createProjectRole(@Body() projectRole: TProjectRole) {
    return this.projectsService.createProjectRole(projectRole)
  }

  @UseGuards(AccessTokenGuard)
  @Delete('delete-project-roles')
  async deleteProjectRoles(@Body() projectRoles: TProjectUserRole[]) {
    return await this.projectsService.deleteProjectRoles(projectRoles)
  }
}