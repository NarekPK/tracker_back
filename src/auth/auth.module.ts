import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersModule } from '../users/users.module'
import { WorkspacesModule } from '../workspaces/workspaces.module'
import { RolesModule } from '../roles/roles.module'
import { CustomFieldsModule } from '../custom-fields/custom-fields.module'
import { ProjectsModule } from '../projects/projects.module'
import { IssuesModule } from '../issues/issues.module'
import { BoardsModule } from '../boards/boards.module'
import { JwtModule } from '@nestjs/jwt'
import { AccessTokenStrategy } from './strategies/access-token.strategy'
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy'

@Module({
  imports: [
    JwtModule.register({}),
    UsersModule,
    UsersModule,
    WorkspacesModule,
    RolesModule,
    CustomFieldsModule,
    ProjectsModule,
    IssuesModule,
    BoardsModule
  ],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy],
})
export class AuthModule {}