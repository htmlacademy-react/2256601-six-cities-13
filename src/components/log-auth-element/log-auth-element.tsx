import { NavLink, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/api-actions';
import { MouseEvent } from 'react';
import { getEmail } from '../../store/user-process/user-selectors';
import { getFavOffersNumber } from '../../store/offers-process/offers-selectors';

export function LogAuthElement() {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(getEmail);
  const favOffersNumber = useAppSelector(getFavOffersNumber);
  const clickNavLinkHandler = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logout());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <NavLink
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.Favorites}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">
              {userEmail}
            </span>
            <span className="header__favorite-count">{favOffersNumber}</span>
          </NavLink>
        </li>
        <li className="header__nav-item">
          <Link
            className="header__nav-link"
            to={AppRoute.Main}
            onClick={clickNavLinkHandler}
          >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

