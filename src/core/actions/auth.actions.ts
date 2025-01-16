'use server';

import { AuthService } from '../services/AuthService';

const authService = new AuthService();

export const loginAction = authService.login.bind(authService);
export const logoutAction = authService.logout.bind(authService);
