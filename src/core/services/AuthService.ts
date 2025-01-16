import { delay } from '@/utils/shared';
import { IAuthService, LoginProps } from '../interfaces/IAuthService';
import { cookies } from 'next/headers';
import { mockUserSession } from '@/mocks/mockSession';
import { DemoDatabase } from '../constants/DemoDatabase';
import { SESSION_KEY } from '@/constants/cookieKeys';
import { AUTH_ERROR_MESSAGES } from '../constants/AuthErrorMessages';
import type { Session } from '../models/Session';
import type { IRequestResult } from '../types/IRequestResult';

export class AuthService implements IAuthService {
  async login(input: LoginProps): Promise<IRequestResult<Session>> {
    await delay(1000);

    const user = DemoDatabase.users.find((user) => user.email === input.email);

    if (!user) {
      return {
        data: null,
        status: 401,
        error: AUTH_ERROR_MESSAGES[401],
      };
    }

    if (!user.isActive) {
      return {
        data: null,
        status: 403,
        error: AUTH_ERROR_MESSAGES[403],
      };
    }

    if (user.password !== input.password) {
      return {
        data: null,
        status: 401,
        error: AUTH_ERROR_MESSAGES[401],
      };
    }

    (await cookies()).set(SESSION_KEY, JSON.stringify(mockUserSession));

    return {
      data: mockUserSession,
      status: 200,
    };
  }

  async logout(): Promise<void> {
    await delay(1000);

    (await cookies()).delete(SESSION_KEY);
  }
}
