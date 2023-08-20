import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { PrivateRouteProps } from './private-route-for-favorites';

export function PrivateRouteForLogin({authorizationStatus, children}: PrivateRouteProps) {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Main} />
  );
}
