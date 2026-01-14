import { IsString, MinLength, MaxLength } from 'class-validator';

export class ChangePasswordDto {
  @IsString()
  @MinLength(6, { message: 'La contraseña actual debe tener al menos 6 caracteres' })
  oldPassword: string;

  @IsString()
  @MinLength(6, { message: 'La nueva contraseña debe tener al menos 6 caracteres' })
  @MaxLength(20, { message: 'La nueva contraseña no puede exceder 20 caracteres' })
  newPassword: string;
}