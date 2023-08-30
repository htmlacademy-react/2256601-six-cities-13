import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MainPage } from '../../pages/main-page/main-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { HelmetProvider } from 'react-helmet-async';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { PrivateRoute } from '../private-route/private-route';
import { loadMainPageData } from '../../pages/main-page/main-loader';

const router = createBrowserRouter([
  {
    path: AppRoute.Main,
    element: <MainPage/>,
    errorElement: <NotFoundPage/>,
    loader: loadMainPageData,
  },
  {
    path: AppRoute.Login,
    element: <LoginPage/>
  },
  {
    path: `${AppRoute.Offer}/: offerId`,
    element: <OfferPage/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: AppRoute.Favorites,
    element: (
      <PrivateRoute>
        <FavoritesPage/>
      </PrivateRoute>
    )
  }
]);

export function App() {

  return (
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  );
}

