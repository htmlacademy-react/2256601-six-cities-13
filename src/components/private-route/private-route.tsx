import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/user-selectors';
import { LoadingScreen } from '../../pages/loading-screen/loading-screen';
import { useAuth } from '../../hooks/use-auth';

export type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({children}: PrivateRouteProps) {
  const authStatus = useAppSelector(getAuthStatus);
  const isAutorized = useAuth();
  if (authStatus === AuthStatus.Unknown) {
    return <LoadingScreen/>;
  }
  if (isAutorized) {
    return children;
  }
  return <Navigate to={AppRoute.Login} />;
}
