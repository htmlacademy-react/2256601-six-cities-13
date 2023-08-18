import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Logo } from '../logo/logo';
import { useAppSelector } from '../../hooks';
import * as selectors from '../../store/selectors';

type HeaderProps = {
  isLogin?: boolean;
}

export function Header ({isLogin}: HeaderProps) {
  const offers = useAppSelector(selectors.offers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          {
            !isLogin &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{favoriteOffers.length}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Main}>
                    <span className="header__signout">Sign out</span>
                  </Link >
                </li>
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  );
}
