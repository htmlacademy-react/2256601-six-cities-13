import { Helmet } from 'react-helmet-async';
import { OffersList } from '../../types/offers-list';
import { FavoritesCardList } from '../../components/favorite-card-list/favorite-card-list';
import { Header } from '../../components/header/header';
import { Logo } from '../../components/logo/logo';
import { PageClass } from '../../const';

type FavotitesPageProps = {
  offersList: OffersList[];
}

export default function FavoritesPage ({offersList}: FavotitesPageProps) {

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
            <FavoritesCardList offerList={offersList} page={PageClass.Favofites}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo isFooter/>
      </footer>
    </div>
  );
}
