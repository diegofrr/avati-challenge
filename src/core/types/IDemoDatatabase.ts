import { User } from '../models/User';

export type IDemoDatabase = {
  users: DemoDatatabaseUser[];
};

export type DemoDatatabaseUser = User & {
  password: string;
  role: DemoDatatabaseUserRole;
  isActive: boolean;
};

export enum DemoDatatabaseUserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}
