import { Helmet } from 'react-helmet-async';
import { OffersList } from '../../types/offers-list';
import { FavoritesCardList } from '../../components/favorite-card-list/favorite-card-list';
import { Header } from '../../components/header/header';
import { AuthorizationStatus } from '../../const';

type FavotitesPageProps = {
  offersList: OffersList[];
}

export default function FavoritesPage ({offersList}: FavotitesPageProps) {

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities - Favorites'}</title>
      </Helmet>
      <Header offersList={offersList} authorizationStatus={AuthorizationStatus.Auth}/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesCardList offerList={offersList}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33}/>
        </a>
      </footer>
    </div>
  );
}
