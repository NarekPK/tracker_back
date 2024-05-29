// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateBoardDto {
  readonly name: string
  readonly workspace_id: string
}