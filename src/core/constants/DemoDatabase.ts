import {
  DemoDatatabaseUserRole,
  IDemoDatabase,
} from '../types/IDemoDatatabase';

export const DemoDatabase: IDemoDatabase = {
  users: [
    {
      id: '1',
      name: 'João',
      email: 'joao@mail.com',
      password: 'joao123',
      role: DemoDatatabaseUserRole.USER,
      createdAt: new Date().toISOString(),
      isActive: true,
    },
    {
      id: '2',
      name: 'Maria',
      email: 'maria@mail.com',
      password: 'maria123',
      role: DemoDatatabaseUserRole.ADMIN,
      createdAt: new Date().toISOString(),
      isActive: true,
    },
    {
      id: '3',
      name: 'Pedro',
      email: 'pedro@mail.com',
      password: 'pedro123',
      role: DemoDatatabaseUserRole.GUEST,
      createdAt: new Date().toISOString(),
      isActive: false,
    },
  ],
};
