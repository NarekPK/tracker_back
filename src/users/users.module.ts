import { forwardRef, Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './users.model'
import { Project } from '../projects/projects.model'
import { Workspace } from '../workspaces/workspaces.model'
// import {AuthModule} from '../auth/auth.module'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Workspace, Project]),
    // RolesModule,
    // forwardRef(() => AuthModule),
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}