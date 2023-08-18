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

export enum NameAction {
  Offers = 'OFFERS',
  Offer = 'OFFER',
  NearPlaces = 'NEAR_PLACES',
  Favorites = 'FAVORITES',
  Reviews = 'REVIEWS',
  User = 'USER',
}

export const MIN_COMMENT_LENGTH = 50;

export const MAX_COMMENT_LENGTH = 300;

export const SortingMap = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  TopRated: 'Top rated first'
};

export const CITIES_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const DATE_FORMAT = 'MMMM YYYY';

export const RatingMap = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
};

export const URL_MARKER_DEFAULT =
  '../img/pin.svg';

export const URL_MARKER_CURRENT =
  '../img/pin-active.svg';

export const APIRoute = {
  Offers: '/offers',
  Comments: '/comments',
  Login: '/login',
  Logout: '/logout',
} as const;

