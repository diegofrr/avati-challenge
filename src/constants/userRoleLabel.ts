import { UserRole } from '@/core/models/UserRole';

export const userRoleLabel: Record<UserRole, string> = {
  [UserRole.ADMIN]: '👑 Administrador',
  [UserRole.USER]: 'Colaborador',
  [UserRole.GUEST]: 'Convidado',
};
