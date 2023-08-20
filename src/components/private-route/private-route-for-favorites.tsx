import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

export type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

export function PrivateRouteForFavorites({authorizationStatus, children}: PrivateRouteProps) {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
