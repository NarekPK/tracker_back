import { Body, Controller, Get, Post, Patch, Delete, UseGuards, Req, UsePipes } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
// import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from './users.model'
// import { JwtAuthGuard } from '../auth/jwt-auth.guard'
// import { Roles } from '../auth/roles-auth.decorator'
// import { RolesGuard } from '../auth/roles.guard'
// import { AddRoleDto } from './dto/add-role.dto'
// import { ValidationPipe } from '../pipes/validation.pipe'
import { AccessTokenGuard } from '../common/guards/access-token.guard'
import { Request } from 'express'

// @ApiTags('Пользователи')
@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  // @ApiOperation({summary: 'Создание пользователя'})
  // @ApiResponse({status: 200, type: User})
  @UseGuards(AccessTokenGuard)
  @Post('create-user')
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto)
  }

  // @ApiOperation({summary: 'Получить всех пользователей'})
  // @ApiResponse({status: 200, type: [User]})
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get('get-users')
  getWorkspaceUsers(@Req() request: Request) {
    return this.usersService.getWorkspaceUsers(request.user['workspace_id'])
  }

  // @ApiOperation({summary: 'Получить всех пользователей'})
  // @ApiResponse({status: 200, type: [User]})
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  // @UseGuards(AccessTokenGuard)
  // @Get()
  // getUserByEmail(@Body() email: string) {
  //   return this.usersService.getUserByEmail(email)
  // }

  @UseGuards(AccessTokenGuard)
  @Get('get-user')
  getUserById(@Req() request: Request) {
    return this.usersService.getUserById(request.user['user_id'])
  }

  @UseGuards(AccessTokenGuard)
  @Patch('update-user')
  updateUser(@Body() userDto: CreateUserDto, @Req() request: Request) {
    return this.usersService.updateUser(userDto, request.user['user_id'])
  }

  @UseGuards(AccessTokenGuard)
  @Delete('delete-user')
  deleteUser(@Body() userInfo: { user_id: string }) {
    return this.usersService.deleteUser(userInfo)
  }
}