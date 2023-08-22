import { AuthStatus } from '../../const';
import { Logo } from '../logo/logo';
import { useAppSelector } from '../../hooks';
import {memo} from 'react';

import { LogAuthElement } from '../log-auth-element/log-auth-element';
import { LogNoAuthElement } from '../log-no-auth-element/log-no-auth-element';
import { getAuthStatus } from '../../store/user-process/user-selectors';

function HeaderComponent () {
  const authStatus = useAppSelector(getAuthStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          {authStatus === AuthStatus.Auth ? <LogAuthElement/> : <LogNoAuthElement/>}
        </div>
      </div>
    </header>
  );
}

export const Header = memo(HeaderComponent);
