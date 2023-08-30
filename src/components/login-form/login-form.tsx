import { useAppDispatch } from '../../hooks';
import { useState, FormEvent, ChangeEvent } from 'react';
import { PASSWORD_REGEXP } from '../../const';
import { login } from '../../store/user-process/user-thunks';

export function LoginForm () {
  const dispatch = useAppDispatch();
  const [AuthInfo, setAuthInfo] = useState({login: '', password: ''});
  const isValidPassword = PASSWORD_REGEXP.test(AuthInfo.password);
  const isNeedDisable = !AuthInfo.login || !isValidPassword;

  const handleChangeLogin = (evt: ChangeEvent<HTMLInputElement>) => {
    setAuthInfo({...AuthInfo, login: evt.target.value});
  };

  const handleChangePassword = (evt: ChangeEvent<HTMLInputElement>) => {
    setAuthInfo({...AuthInfo, password: evt.target.value});
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(login({
      email: AuthInfo.login,
      password: AuthInfo.password,
    }));
  };
  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={handleSubmitForm}
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
            onChange={handleChangeLogin}
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
            onChange={handleChangePassword}
          />
          {isValidPassword && (
            <p style={{
              marginBlock: '0 20px',
              color: '#ff0000'
            }}
            >Password must contain at least one number and letter.
            </p>)}
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
  );
}


