import { Session } from '@/core/models/Session';

export const mockUserSession: Session = {
  user: {
    id: '1',
    name: 'Diêgo Ferreira',
    email: 'test@example.com',
    createdAt: new Date().toISOString(),
  },

  accessToken: 'access_token',
  refreshToken: 'refresh_token',
  expires: new Date().toISOString(),
};
