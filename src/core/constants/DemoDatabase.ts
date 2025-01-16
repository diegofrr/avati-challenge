import { UserRole } from '../models/UserRole';
import { IDemoDatabase } from '../types/IDemoDatatabase';

export const DemoDatabase: IDemoDatabase = {
  users: [
    {
      id: '1',
      name: 'João da Silva',
      email: 'joao@mail.com',
      password: 'joao123',
      role: UserRole.USER,
      createdAt: new Date().toISOString(),
      isActive: true,
    },
    {
      id: '2',
      name: 'Maria Oliveira Fernandes',
      email: 'maria@mail.com',
      password: 'maria123',
      role: UserRole.ADMIN,
      createdAt: new Date().toISOString(),
      isActive: true,
    },
    {
      id: '3',
      name: 'Pedro Henrique Carvalho',
      email: 'pedro@mail.com',
      password: 'pedro123',
      role: UserRole.GUEST,
      createdAt: new Date().toISOString(),
      isActive: false,
    },
  ],
};
