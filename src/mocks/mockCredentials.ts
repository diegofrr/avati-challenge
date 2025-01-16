import { Session } from '@/core/models/Session';

export const mockCredentials: Omit<Session, 'user'> = {
  accessToken: 'access_token',
  refreshToken: 'refresh_token',
  expires: new Date().toISOString(),
};
