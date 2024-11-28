import { ApiProperty } from '@nestjs/swagger'

export class CreateProjectDto {

  readonly project_id?: string

  @ApiProperty({ example: 'Project', description: 'Name'})
  readonly name: string

  @ApiProperty({ example: '', description: 'Description'})
  readonly description: string

  @ApiProperty({ example: '1faeb6ef-9b74-4315-93d6-dde1c52a0f87', description: 'Project owner'})
  readonly project_owner: string

  readonly workspace_id: string
}

export type TProjectRole = {
  project_id: string
  role_id: string
  user_id: string
}

export type TProjectUserRole = {
  id: string
  project_id: string
  roles: {
    name: string,
    role_id: string
  }[]
  user: {
    profile_name: string,
    user_id: string
  }
}