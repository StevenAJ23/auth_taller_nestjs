import {
    Injectable,
    ConflictException,
    UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { Role } from './enums/role.enum';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async register(registerDto: RegisterDto) {
        const { email, password, nombre, role } = registerDto;

        const existingUser = this.usersService.findByEmail(email);
        if (existingUser) {
            throw new ConflictException('El email ya está registrado');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = this.usersService.create({
            nombre,
            email,
            password: hashedPassword,
            role: role || Role.User,
        });

        const { password: _, ...result } = newUser;

        return {
            message: 'Usuario registrado exitosamente',
            user: result,
        };
    }

    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;

        const user = this.usersService.findByEmail(email);
        if (!user || !user.password) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        const payload = {
            sub: user.id,
            email: user.email,
            nombre: user.nombre,
            role: user.role
        };

        return {
            message: 'Login exitoso',
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                nombre: user.nombre,
                email: user.email,
                role: user.role
            }
        };
    }

    async changePassword(userId: number, changePasswordDto: ChangePasswordDto) {
        const user = this.usersService.findById(userId);
        if (!user || !user.password) {
            throw new UnauthorizedException('Usuario no encontrado');
        }

        const isMatch = await bcrypt.compare(changePasswordDto.oldPassword, user.password);
        if (!isMatch) {
            throw new UnauthorizedException('La contraseña actual es incorrecta');
        }

        const newHashedPassword = await bcrypt.hash(changePasswordDto.newPassword, 10);

        this.usersService.update(userId, { password: newHashedPassword });

        return { message: 'Contraseña actualizada correctamente' };
    }
}