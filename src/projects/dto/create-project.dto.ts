// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateProjectDto {
  readonly name: string
  readonly description: string
  readonly project_owner: string
  readonly project_id: string
  readonly workspace_id: string
}

export type TProjectRole = {
  project_id: string
  role_id: string
  user_id: string
}