import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ConfigModule } from '@nestjs/config'
// import { FilesModule } from './files/files.module'
// import { ServeStaticModule } from '@nestjs/serve-static'

import { Workspace } from './workspaces/workspaces.model'

import { User } from './users/users.model'
import { Role } from './roles/roles.model'
import { Permission } from './permissions/permissions.model'
// import { RolePermission } from './roles/roles-permissions.model'
// import { ProjectRoleForUser } from './roles/project-roles-for-users.model'
import { ProjectUser } from 'src/projects/projects-users.model'
import { ProjectUserRole } from 'src/projects/projects-users-roles.model'
import { Group } from './groups/groups.model'
import { ProjectRoleForGroup } from './roles/project-roles-for-groups.model'
import { Organization } from './organizations/organizations.model'
import { OrganizationRoleForGroup } from './roles/organization-roles-for-groups.model'
import { OrganizationRoleForUser } from './roles/organization-roles-for-users.model'
import { GroupUser } from './groups/groups-users.model'
import { OrganizationProject } from './organizations/organizations-projects.model'
import { Project } from './projects/projects.model'
import { Issue } from './issues/issues.model'
import { IssueObserver } from './issues/issues-observers.model'
import { IssueMedia } from './issues-media/issues-media.model'
import { Board } from './boards/boards.model'
import { ProjectBoard } from './boards/projects-boards.model'
import { IssueComment } from './issues-comments/issues-comments.model'
import { CustomFieldType } from './custom-field-types/custom-field-types.model'
import { CustomField } from './custom-fields/custom-fields.model'
import { ProjectCustomField } from './projects/projects-custom-fields.model'


import { WorkspacesModule } from './workspaces/workspaces.module'
import { UsersModule } from './users/users.module'
import { PermissionsModule } from './permissions/permissions.module'
import { RolesModule } from './roles/roles.module'
import { ProjectsModule } from './projects/projects.module'
import { GroupsModule } from './groups/groups.module'
import { OrganizationsModule } from './organizations/organizations.module'
import { IssuesModule } from './issues/issues.module'
import { BoardsModule } from './boards/boards.module'
import { IssuesCommentsModule } from './issues-comments/issues-comments.module'
import { IssuesMediaModule } from './issues-media/issues-media.module'
import { CustomFieldTypesModule } from './custom-field-types/custom-field-types.module'
import { CustomFieldsModule } from './custom-fields/custom-fields.module'
import { AuthModule } from './auth/auth.module'

// import * as path from 'path'

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: path.resolve( __dirname, 'static'),
    // }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Workspace,
        User,
        Permission,
        Role,
        // RolePermission,
        Project,
        ProjectUser,
        ProjectUserRole,
        Group,
        ProjectRoleForGroup,
        Organization,
        OrganizationRoleForUser,
        OrganizationRoleForGroup,
        GroupUser,
        OrganizationProject,
        Issue,
        IssueObserver,
        IssueMedia,
        IssueComment,
        Board,
        ProjectBoard,
        CustomFieldType,
        CustomField,
        ProjectCustomField
      ],
      autoLoadModels: true,
    }),
    WorkspacesModule,
    UsersModule,
    PermissionsModule,
    RolesModule,
    ProjectsModule,
    GroupsModule,
    OrganizationsModule,
    IssuesModule,
    BoardsModule,
    IssuesCommentsModule,
    IssuesMediaModule,
    CustomFieldTypesModule,
    CustomFieldsModule,
    AuthModule,
    // UsersModule,
    // RolesModule,
    // AuthModule,
    // PostsModule,
    // FilesModule,
  ],
})
export class AppModule {}
