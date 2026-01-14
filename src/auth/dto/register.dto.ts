import { IsEmail, IsString, MinLength, MaxLength, IsEnum, IsOptional } from 'class-validator';
import { Role } from '../enums/role.enum';

export class RegisterDto {
    @IsString()
    @MinLength(3, { message: 'El nombre es muy corto' })
    nombre: string;

    @IsEmail({}, { message: 'Email inválido' })
    email: string;

    @IsString()
    @MinLength(6, { message: 'Mínimo 6 caracteres' })
    @MaxLength(20)
    password: string;

    @IsOptional()
    @IsEnum(Role, { message: 'El rol debe ser user, admin o seller' })
    role?: Role;
}