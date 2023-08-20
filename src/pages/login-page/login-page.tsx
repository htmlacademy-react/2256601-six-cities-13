import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { useRef, FormEvent, MouseEvent } from 'react';
import { useAppDispatch} from '../../hooks';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../store/api-actions';
import { AppRoute, CITIES_NAMES } from '../../const';
import { getRandomValueFromArray } from '../../utils';
import { setActiveCity } from '../../store/actions';

export function LoginPage () {
  const loginRef = useRef<HTMLInputElement | null> (null);
  const passwordRef = useRef<HTMLInputElement | null> (null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const randomCity = getRandomValueFromArray(CITIES_NAMES);


  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(login({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  const buttonClickHandler = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    const city = evt.currentTarget.dataset.city as string;
    dispatch(setActiveCity(city));
    navigate(AppRoute.Main);
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
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#" onClick={buttonClickHandler} data-city={randomCity}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
