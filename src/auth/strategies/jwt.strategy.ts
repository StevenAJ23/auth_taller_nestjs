import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// CLAVE SECRETA
export const JWT_SECRET = 'mi_clave_secreta_muy_segura_2024';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: JWT_SECRET,
        });
    }

    async validate(payload: any) {
        // Importante: Devolvemos también el rol
        return {
            userId: payload.sub,
            email: payload.email,
            nombre: payload.nombre,
            role: payload.role
        };
    }
}