import { Module } from '@nestjs/common'
import { OrganizationsService } from './organizations.service'
import { OrganizationsController } from './organizations.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Organization } from './organizations.model'
import { Workspace } from '../workspaces/workspaces.model'
import { User } from '../users/users.model'

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
  imports: [
    SequelizeModule.forFeature([Organization, Workspace, User])
  ],
  exports: [
    OrganizationsService
  ]
})
export class OrganizationsModule {}