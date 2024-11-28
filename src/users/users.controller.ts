import { Body, Controller, Get, Post, Patch, Delete, UseGuards, Req, UsePipes, Param } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from './users.model'
import { AccessTokenGuard } from '../common/guards/access-token.guard'
import { Request } from 'express'

@ApiTags('Users')
@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @ApiOperation({summary: 'Create user'})
  @ApiResponse({status: 200, type: User})
  @UseGuards(AccessTokenGuard)
  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto)
  }

  @ApiOperation({summary: 'Get current workspace users'})
  @ApiResponse({status: 200, type: [User]})
  @UseGuards(AccessTokenGuard)
  @Get()
  getWorkspaceUsers(@Req() request: Request) {
    return this.usersService.getWorkspaceUsers(request.user['workspace_id'])
  }

  @ApiOperation({summary: 'Get current user'})
  @ApiResponse({status: 200, type: User})
  @UseGuards(AccessTokenGuard)
  @Get('me')
  getUserMe(@Req() request: Request) {
    return this.usersService.getUserById(request.user['user_id'])
  }

  @ApiOperation({summary: 'Get user'})
  @ApiResponse({status: 200, type: User})
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id)
  }

  @ApiOperation({summary: 'Update user'})
  @ApiResponse({status: 200, type: User})
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() userDto: CreateUserDto) {
    return this.usersService.updateUser(id, userDto)
  }

  @ApiOperation({summary: 'Delete user'})
  @ApiResponse({status: 200, type: Boolean })
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id)
  }
}