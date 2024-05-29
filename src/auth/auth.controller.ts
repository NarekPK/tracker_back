import { Body, Controller, Get, Post, Req, UseGuards, HttpCode } from '@nestjs/common'
import { Request } from 'express'
import { AccessTokenGuard } from '../common/guards/access-token.guard'
import { RefreshTokenGuard } from '../common/guards/refresh-token.guard'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { AuthService } from './auth.service'
import { AuthDto } from './dto/auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto, @Req() request: Request) {
    const {
      accessTokenCookie,
      refreshTokenCookie,
      user
    } = await this.authService.register(createUserDto)

    request.res.setHeader('Set-Cookie', [
      accessTokenCookie,
      refreshTokenCookie
    ])

    return user
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() authData: AuthDto, @Req() request: Request) {
    const {
      accessTokenCookie,
      refreshTokenCookie,
      user
    } = await this.authService.login(authData)

    request.res.setHeader('Set-Cookie', [
      accessTokenCookie,
      refreshTokenCookie
    ])

    return user
  }

  @UseGuards(AccessTokenGuard)
  @Get('logout')
  logout(@Req() request: Request) {
    this.authService.logout(request.user['user_id'])
    request.res.setHeader(
      'Set-Cookie',
      this.authService.getCookiesForLogOut()
    )

    return { logout: true }
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  async refreshTokens(@Req() request: Request) {
    const user_id = request.user['user_id']
    const refreshToken = request.user['refreshToken']
    const {
      accessTokenCookie,
      refreshTokenCookie
    } = await this.authService.refreshTokens(user_id, refreshToken)

    request.res.setHeader('Set-Cookie', [
      accessTokenCookie,
      refreshTokenCookie
    ])

    return { refresh: true }
  }
}