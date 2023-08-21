import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MainPage } from '../../pages/main-page/main-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { HelmetProvider } from 'react-helmet-async';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { PrivateRouteForFavorites } from '../private-route/private-route-for-favorites';
import { useAppDispatch, useAppSelector } from '../../hooks';
import * as selectors from '../../store/selectors';
import { PrivateRouteForLogin } from '../private-route/private-route-for-login';
import { useEffect } from 'react';
import { checkAuth, fetchOffers } from '../../store/api-actions';

export function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuth());
    dispatch(fetchOffers());
  }, [dispatch]);

  const authStatus = useAppSelector(selectors.authorizationStatus);

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
              <PrivateRouteForFavorites authorizationStatus={authStatus}>
                <FavoritesPage/>
              </PrivateRouteForFavorites>
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRouteForLogin authorizationStatus={authStatus}>
                <LoginPage/>
              </PrivateRouteForLogin>
            }
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

