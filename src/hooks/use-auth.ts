import { useAppSelector } from '.';
import { AuthStatus } from '../const';
import { getAuthStatus } from '../store/user-process/user-selectors';

export function useAuth() {
  const authStatus = useAppSelector(getAuthStatus);
  return authStatus === AuthStatus.Auth;
}
