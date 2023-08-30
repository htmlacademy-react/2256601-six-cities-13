import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { useAppSelector} from '../../hooks';
import { RandomCityButton } from '../../components/random-city-buttom/random-city-buttom';
import { useAuth } from '../../hooks/use-auth';
import { getAuthStatus } from '../../store/user-process/user-selectors';
import { AppRoute, AuthStatus } from '../../const';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { Navigate } from 'react-router-dom';
import { LoginForm } from '../../components/login-form/login-form';

export function LoginPage () {
  const isAuthorized = useAuth();
  const authStatus = useAppSelector(getAuthStatus);
  if (authStatus === AuthStatus.Unknown) {
    return <LoadingScreen/>;
  }
  if (isAuthorized) {
    return <Navigate to = {AppRoute.Main}/>;
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>{'6 cities - Login'}</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm/>
          <RandomCityButton/>
        </div>
      </main>
    </div>
  );
}
