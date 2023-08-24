import { NameSpace, AuthStatus } from '../../const';
import { State } from '../../types/state';

export const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authorizationStatus;
export const getEmail = (state: State): string | undefined => state[NameSpace.User].userData?.email;
