import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoritesCount } from '../../store/favorite-offers-process/favorite-offers-selectors';
import { getAvatarUrl, getEmail } from '../../store/user-process/user-selectors';
import { MouseEvent } from 'react';
import { logout } from '../../store/user-process/user-thunks';
import { clearUser } from '../../store/user-process/user-process';
import { AppRoute } from '../../const';

type HeaderNavProps = {
  authStatus: boolean;
}

export function HeaderNav ({authStatus}: HeaderNavProps) {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(getEmail);
  const userAvatarUrl = useAppSelector(getAvatarUrl);
  const favoritesCoutn = useAppSelector(getFavoritesCount);
  const navigate = useNavigate();

  const handleClickLogout = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logout);
    dispatch(clearUser);
    navigate(AppRoute.Main);
  };

  if (authStatus) {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Favorites}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper">
                <img src={userAvatarUrl} alt='avatar' style={{borderRadius: '50%'}}/>
              </div>
              <span className="header__user-name user__name">
                {userEmail}
              </span>
              <span className="header__favorite-count">{favoritesCoutn}</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              to={AppRoute.Main}
              onClick={handleClickLogout}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link"
            to={AppRoute.Login}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
