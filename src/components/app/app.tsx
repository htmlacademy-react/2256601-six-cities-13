import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MainPage } from '../../pages/main-page/main-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { AuthorizationStatus } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { PrivateRoute } from '../private-route/private-route';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { fetchOffers } from '../../store/api-actions';
import { useSelector } from 'react-redux';
import * as selectors from '../../store/selectors';

export function App() {
  const dispatch = useAppDispatch();
  const offers = useSelector(selectors.offers);
  if (offers) {
    localStorage.setItem('offers', JSON.stringify(offers));
  }
  useEffect (() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage/>}
          />
          <Route
            path="*"
            element={<NotFoundPage/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

