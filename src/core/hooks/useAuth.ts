import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { loginAction, logoutAction } from '@/core/actions/auth.actions';
import { LoginProps } from '@/core/interfaces/IAuthService';
import { Session } from '@/core/models/Session';
import { HttpError } from '@/core/errors/HttpError';
import { toast } from 'sonner';
import { AUTH_ERROR_MESSAGES } from '../constants/AuthErrorMessages';

export const useLogin = (): UseMutationResult<
  Session | null,
  Error,
  LoginProps
> => {
  return useMutation({
    mutationFn: async (input) => {
      try {
        const result = await loginAction(input);

        if (result.error) throw new HttpError(result.error, result.status);
        return result.data;
      } catch (err) {
        const error = err as HttpError;

        toast.error(AUTH_ERROR_MESSAGES[error.statusCode || 500], {
          position: 'bottom-center',
          duration: 5000,
          closeButton: true,
        });

        console.error(error);
        return null;
      }
    },
    mutationKey: ['login'],
  });
};

export const useLogout = (): UseMutationResult<void, Error, void> => {
  return useMutation({
    mutationFn: async () => {
      try {
        await logoutAction();
      } catch (error) {
        console.error(error);
      }
    },
    mutationKey: ['logout'],
  });
};
