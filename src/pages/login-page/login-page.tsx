import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { FormEvent, useState, ChangeEvent } from 'react';
import { useAppDispatch} from '../../hooks';
import { login } from '../../store/api-actions';
import { RandomCityButton } from '../../components/random-city-buttom/random-city-buttom';


export function LoginPage () {
  const [AuthInfo, setAuthInfo] = useState({login: '', password: ''});
  const dispatch = useAppDispatch();

  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;
  const isValidPassword = passwordRegex.test(AuthInfo.password);
  const isNeedDisable = !AuthInfo.login || !isValidPassword;

  const changeLoginHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setAuthInfo({...AuthInfo, login: evt.target.value});
  };

  const changePasswordHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setAuthInfo({...AuthInfo, password: evt.target.value});
  };

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(login({
      email: AuthInfo.login,
      password: AuthInfo.password,
    }));
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>{'6 cities - Login'}</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={submitHandler}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={AuthInfo.login}
                  onChange={changeLoginHandler}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={AuthInfo.password}
                  onChange={changePasswordHandler}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={isNeedDisable}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <RandomCityButton/>
          </section>
        </div>
      </main>
    </div>
  );
}
