import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUsersDtos, UpdateUsersDtos } from '../dtos/users.dtos';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      user_id: 1,
      name: 'Carlos',
      lastname: 'Rivera',
      phone: '987654321',
      mail: 'Carlos.Rivera@gmail.com',
      profile: 'imagencita.com',
    },
  ];

  findAllUsers() {
    return this.users;
  }

  findOneUser(userId: number) {
    const users = this.users.find((users) => users.user_id === userId);
    if (!users) {
      throw new NotFoundException(`Users ${userId} no encontrado`);
    }
    return users;
  }

  createUser(payload: CreateUsersDtos) {
    this.counterId = this.counterId + 1;
    const users = {
      user_id: this.counterId,
      ...payload,
    };
    this.users.push(users);
    return users;
  }

  updateUser(payload: UpdateUsersDtos, userId: number) {
    const user = this.findOneUser(userId);
    const index = this.users.findIndex((users) => users.user_id === userId);
    this.users[index] = {
      ...user,
      ...payload,
    };
    return this.users[index];
  }

  deleteUser(userId: number) {
    const index = this.users.findIndex((users) => users.user_id === userId);
    if (index === -1) {
      throw new NotFoundException(`Users ${userId} no encontrado`);
    }
    this.users.splice(index, 1);
    return { message: `Users ${userId} eliminado` };
  }
}
