import type { AxiosError } from 'axios';
import type { AuthLoginCredentials, AuthLoginResponse } from '../datatypes/auth.datatypes';
import Api from '../util/api.util';

export const signInUser = async (authLoginCredentials: AuthLoginCredentials): Promise<AuthLoginResponse> => {
  const response: AuthLoginResponse = await Api.post('auth/sign-in', authLoginCredentials).catch((err: AxiosError) => {
    throw err.response!.data;
  });
  return response;
};
