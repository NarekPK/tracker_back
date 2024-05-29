// import { ApiProperty } from '@nestjs/swagger'
// import {IsEmail, IsString, Length} from 'class-validator'

export class CreateWorkspaceDto {

    // @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
    // @IsString({message: 'Должно быть строкой'})
    // @IsEmail({}, {message: 'Некорректный email'})
    readonly admin_email: string
}