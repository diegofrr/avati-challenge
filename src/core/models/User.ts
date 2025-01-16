import { UserRole } from './UserRole';

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  role: UserRole;
};
