import { LOCAL_STORAGE_AUTH_TOKEN_KEY } from '@/constants';

export function storeToken(token: string) {
  return sessionStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, token);
}

export function getStoredToken() {
  return sessionStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);
}

export function removeStoredToken() {
  return sessionStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);
}
