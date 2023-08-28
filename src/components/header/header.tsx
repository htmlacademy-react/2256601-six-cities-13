import { Logo } from '../logo/logo';
import { useAppDispatch} from '../../hooks';
import {memo, useEffect} from 'react';
import { useAuth } from '../../hooks/use-auth';
import { fetchFavorites } from '../../store/favorite-offers-process/favorite-offers-thunks';
import { HeaderNav } from '../header-nav/header-nav';

function HeaderComponent () {
  const isAuthorized = useAuth();
  const dispatch = useAppDispatch();

  useEffect (() => {
    if (isAuthorized) {
      dispatch(fetchFavorites());
    }
  }, [isAuthorized, dispatch]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <HeaderNav authStatus={isAuthorized}/>
        </div>
      </div>
    </header>
  );
}

export const Header = memo(HeaderComponent);
