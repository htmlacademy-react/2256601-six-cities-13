import { reviewsProcessSlice } from './reviews-process/reviews-process';
import { combineReducers } from '@reduxjs/toolkit';
import { offersProcessSlice } from './offers-process/offers-process';
import { userProcessSlice } from './user-process/user-process';
import { nearbyOffersProcessSlice } from './nearby-offers-process/nearby-offers-process';
import { favoritesProcessSlice } from './favorite-offers-process/favorite-offers-process';
import { offerCardProcessSlice } from './offer-card-process/offer-card-process';

export const rootReducer = combineReducers({
  [offersProcessSlice.name]: offersProcessSlice.reducer,
  [offerCardProcessSlice.name]: offerCardProcessSlice.reducer,
  [nearbyOffersProcessSlice.name]: nearbyOffersProcessSlice.reducer,
  [favoritesProcessSlice.name]: favoritesProcessSlice.reducer,
  [reviewsProcessSlice.name]: reviewsProcessSlice.reducer,
  [userProcessSlice.name]: userProcessSlice.reducer,
});
