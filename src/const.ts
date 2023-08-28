export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
export const COUNT_NEARBY_OFFERS = 3;
export const SHOWABLE_REVIEWS = -10;

export const DATE_FORMAT = 'MMMM YYYY';

export const URL_MARKER_DEFAULT = '../img/pin.svg';

export const URL_MARKER_CURRENT = '../img/pin-active.svg';

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
  NotFound: '/404',
}as const;

export type AppRouteValue = typeof AppRoute[keyof typeof AppRoute];

export const AuthStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export type AuthStatusValue = typeof AuthStatus[keyof typeof AuthStatus];

export const APIRoute = {
  Offers: '/offers',
  NearbyOffers: '/nearby',
  Reviews: '/comments',
  Login: '/login',
  Logout: '/logout',
  Favorites: '/favorite'
} as const;

export const RequestStatusMap = {
  Idle: 'idle',
  Pending: 'pending',
  Success: 'succeeded',
  Failed: 'failed',
} as const;

export type RequestStatusValue = typeof RequestStatusMap[keyof typeof RequestStatusMap]

export enum NameSpace {
  Offers = 'OFFERS',
  OfferCard = 'OFFER_CARD',
  NearbyOffers = 'NEARBY_OFFERS',
  Favorites = 'FAVORITES',
  Reviews = 'REVIEWS',
  User = 'USER',
}

export const RatingMap = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
};

export const SortingMap = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  TopRated: 'Top rated first'
};

export const CITIES_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export type CitiesNameValue = typeof CITIES_NAMES[number];

export const FavoriteChangeRequest = {
  Add: 1,
  Remove: 0
};

export const PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9\\.]{1,}$/;
