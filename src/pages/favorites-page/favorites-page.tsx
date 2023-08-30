import { Helmet } from 'react-helmet-async';
import { FavoritesCardList } from '../../components/favorite-cards-list/favorite-cards-list';
import { Header } from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import FavoritesEmptyPage from './favorites-empty';
import { fetchFavorites } from '../../store/favorite-offers-process/favorite-offers-thunks';
import { getFavorites } from '../../store/favorite-offers-process/favorite-offers-selectors';
import { Footer } from '../../components/footer/footer';
import classNames from 'classnames';

export default function FavoritesPage () {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);
  const favoriteOffers = useAppSelector(getFavorites);
  const hasOffers = favoriteOffers && favoriteOffers.length > 0;
  const parentClass = 'favorites';

  return (
    <div className={classNames('page', {'page--favorites-empty': !hasOffers})}>
      <Helmet>
        <title>{'6 cities - Favorites'}</title>
      </Helmet>
      <Header/>
      {hasOffers ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesCardList favoriteOffers={favoriteOffers} parentClass={parentClass}/>
            </section>
          </div>
        </main>
      ) : <FavoritesEmptyPage/>}
      <Footer/>
    </div>
  );
}
