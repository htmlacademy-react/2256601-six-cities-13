import { Helmet } from 'react-helmet-async';
import { FavoritesCardList } from '../../components/favorite-card-list/favorite-card-list';
import { Header } from '../../components/header/header';
import { Logo } from '../../components/logo/logo';
import { useAppSelector } from '../../hooks';
import { getOffersByFavorites } from '../../utils';
import { getOffers } from '../../store/offers-process/offers-selectors';

export default function FavoritesPage () {
  const offers = useAppSelector(getOffers);
  const offersByFavorites = getOffersByFavorites(offers);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities - Favorites'}</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesCardList offerList={offersByFavorites} pageClass={'favorites__card'}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo isFooter/>
      </footer>
    </div>
  );
}
