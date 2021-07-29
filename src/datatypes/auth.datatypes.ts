export interface AuthLoginCredentials {
  username: string;
  password: string;
}

export interface AuthLoginResponse {
  accessToken: string;
}

export interface AuthRegisterCredentials {
  username: string;
  email: string;
  password: string;
}
