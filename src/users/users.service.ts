import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Role } from '../auth/enums/role.enum';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  create(userData: Omit<User, 'id' | 'createdAt'>): User {
    const newUser: User = {
      id: this.idCounter++,
      ...userData,
      // Si no envían rol, asignamos 'user' por defecto
      role: userData.role || Role.User,
      createdAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  findById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  findAll(): Omit<User, 'password'>[] {
    return this.users.map(({ password, ...rest }) => rest);
  }

  // Método vital para cambiar la contraseña
  update(id: number, updateData: Partial<User>) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex > -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updateData };
      return this.users[userIndex];
    }
    return null;
  }
}