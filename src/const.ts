export const Setting = {
  CardCount: 4
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AdClass {
  CitiesCardClass = 'cities__card place-card',
  FavotitesCardClass = 'favorites__card place-card',
  CitiesImageWrapperClass = 'cities__image-wrapper place-card__image-wrapper',
  FavoritesImageWrapperClass = 'favorites__image-wrapper place-card__image-wrapper',
}
