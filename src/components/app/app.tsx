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
import { OfferListItem } from '../../types/offer-list-item';
import { offersObjectMock } from '../../mocks/offers-object-mock';

type AppProps = {
  offersList: OfferListItem[];
}

export function App({offersList}: AppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offersList={offersList}/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage offersList={offersList}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
          />
          <Route
            path={`${AppRoute.Offer}/:offerId`}
            element={<OfferPage offerCard={offersObjectMock[3]}/>}
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

