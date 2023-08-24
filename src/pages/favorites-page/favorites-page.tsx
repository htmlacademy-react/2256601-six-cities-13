import { Helmet } from 'react-helmet-async';
import { FavoritesCardList } from '../../components/favorite-card-list/favorite-card-list';
import { Header } from '../../components/header/header';
import { Logo } from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavOffers } from '../../store/api-actions';
import { useEffect } from 'react';
import { getFavOffers, getFavOffersLoadStatus } from '../../store/offers-process/offers-selectors';
import FavoritesEmptyPage from './favorites-empty';
import { LoadingScreen } from '../loading-screen/loading-screen';

export default function FavoritesPage () {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavOffers());
  }, [dispatch]);
  const favoriteOffers = useAppSelector(getFavOffers);
  const isFavOffersLoading = useAppSelector(getFavOffersLoadStatus);
  if (isFavOffersLoading) {
    return <LoadingScreen/>;
  }
  if (favoriteOffers.length === 0 && !isFavOffersLoading) {
    return <FavoritesEmptyPage/>;
  }

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
            <FavoritesCardList favoriteOffers={favoriteOffers} pageClass={'favorites__card'}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo isFooter/>
      </footer>
    </div>
  );
}
