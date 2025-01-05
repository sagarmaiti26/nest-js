import { Injectable } from '@nestjs/common';
import { resourceLimits } from 'worker_threads';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 3,
      name: 'Sagar Maiti',
      email: 'sagar.maiti@pointo.in',
      role: 'ENGINEER',
    },
    {
      id: 6,
      name: 'Anjali Sharma',
      email: 'anjali.sharma@healthcare.in',
      role: 'DOCTOR',
    },
    {
      id: 2,
      name: 'Rohan Verma',
      email: 'rohan.verma@techspace.in',
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'Priya Kapoor',
      email: 'priya.kapoor@medix.in',
      role: 'INTERN',
    },
    {
      id: 7,
      name: 'Aman Singh',
      email: 'aman.singh@engineeringhub.in',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Neha Gupta',
      email: 'neha.gupta@carehub.in',
      role: 'DOCTOR',
    },
  ];

  getAllUsers(role?: 'ENGINEER' | 'DOCTOR' | 'INTERN') {
    if (role) {
      const allUsers = this.users.filter((user) => {
        return user.role === role;
      });
      return allUsers;
    }
    return this.users;
  }
  getInternData() {
    return this.users.filter((user) => user.role === 'INTERN');
  }

  getUserById(id: number) {
    if (id) {
      return this.users.filter((user) => user.id === id);
    }
  }
  createUser(user: {
    name: string;
    email: string;
    role: 'ENGINEER' | 'DOCTOR' | 'INTERN';
  }) {
    const sortUser = this.users.sort((a, b) => {
      return b.id - a.id;
    });
    const newUser = { id: sortUser[0].id + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }
  updateOne(
    id: number,
    updateUser: {
      name?: string;
      email?: string;
      role?: 'ENGINEER' | 'DOCTOR' | 'INTERN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUser };
      }
      return user;
    });
    return this.getUserById(id);
  }

  deleteUser(id: number) {
    const deletedUser = this.getUserById(id);
    this.users = this.users.filter((user) => user.id !== id);
    return deletedUser;
  }
}
