import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';
import { OffersList } from '../../types/offers-list';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus;
  offersList: OffersList[];
}

export function Header ({authorizationStatus, offersList}: HeaderProps) {
  const favoriteOffers = offersList.filter((offer) => offer.isFavorite);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41}/>
            </Link>
          </div>
          {
            authorizationStatus === AuthorizationStatus.Auth &&
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
