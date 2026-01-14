import { Role } from '../../auth/enums/role.enum';

export class User {
    id: number;
    nombre: string;
    email: string;
    password?: string;
    role: Role; // <--- Nuevo campo
    createdAt: Date;
}