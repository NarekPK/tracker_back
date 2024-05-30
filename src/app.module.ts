import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ConfigModule } from '@nestjs/config'
// import { AuthModule } from './auth/auth.module'
// import { FilesModule } from './files/files.module'
// import { ServeStaticModule } from '@nestjs/serve-static'
import { WorkspacesModule } from './workspaces/workspaces.module'
import { Workspace } from './workspaces/workspaces.model'
import { UsersModule } from './users/users.module'
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
import { Task } from './tasks/tasks.model'
import { TaskObserver } from './tasks/tasks-observers.model'
import { TaskMedia } from './tasks-media/tasks-media.model'
import { Board } from './boards/boards.model'
import { ProjectBoard } from './boards/projects-boards.model'
import { TaskComment } from './tasks-comments/tasks-comments.model'
import { CustomFieldType } from './custom-field-types/custom-field-types.model'
import { CustomField } from './custom-fields/custom-fields.model'
import { ProjectCustomField } from './projects/projects-custom-fields.model'
import { PermissionsModule } from './permissions/permissions.module'
import { RolesModule } from './roles/roles.module'
import { ProjectsModule } from './projects/projects.module'
import { GroupsModule } from './groups/groups.module'
import { OrganizationsModule } from './organizations/organizations.module'
import { TasksModule } from './tasks/tasks.module'
import { BoardsModule } from './boards/boards.module'
import { TasksCommentsModule } from './tasks-comments/tasks-comments.module'
import { TasksMediaModule } from './tasks-media/tasks-media.module'
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
        Task,
        TaskObserver,
        TaskMedia,
        TaskComment,
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
    TasksModule,
    BoardsModule,
    TasksCommentsModule,
    TasksMediaModule,
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
