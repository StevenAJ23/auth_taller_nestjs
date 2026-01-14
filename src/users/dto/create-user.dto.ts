import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    nombre: string;

    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    password?: string;
}

