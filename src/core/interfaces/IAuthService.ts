import { Session } from '../models/Session';
import { IRequestResult } from '../types/IRequestResult';

export interface IAuthService {
  login(input: LoginProps): Promise<IRequestResult<Session>>;
  logout(): Promise<void>;
}

export type LoginProps = {
  email: string;
  password: string;
};
