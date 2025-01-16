import { User } from '../models/User';

export type IDemoDatabase = {
  users: DemoDatatabaseUser[];
};

export type DemoDatatabaseUser = User & {
  password: string;
  isActive: boolean;
};
