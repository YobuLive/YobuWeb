import Cookies from 'js-cookie';

export const setCookie = (key: string, value: string): void => {
  Cookies.set(key, value);
};

export const setAccessToken = (token: string, expiry: number = 86400): void => {
  Cookies.set('accessToken', token, { expires: expiry });
};

export const getAccessToken = (): string => {
  return Cookies.get('accessToken');
};

export const getCookie = (key: string): string => {
  return Cookies.get(key);
};

export const removeCookie = (key: string): void => {
  Cookies.remove(key);
};

export const removeAccessToken = (): void => {
  Cookies.remove('accessToken');
};

export const checkSession = (): boolean => {
  return Cookies.get('accessToken') ? true : false;
};
