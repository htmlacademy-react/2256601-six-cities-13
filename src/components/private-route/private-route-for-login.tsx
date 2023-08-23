import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { PrivateRouteProps } from './private-route-for-favorites';

export function PrivateRouteForLogin({authorizationStatus, children}: PrivateRouteProps) {
  return (
    authorizationStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Main} />
  );
}
