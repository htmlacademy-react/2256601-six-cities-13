import { reviewsProcessSlice } from './reviews-process/reviews-process';
import { nearByOffersProcessSlice } from './nearby-offers-process/nearby-offers-process';
import { combineReducers } from '@reduxjs/toolkit';
import { offersProcessSlice } from './offers-process/offers-process';
import { userProcessSlice } from './user-process/user-process';

export const rootReducer = combineReducers({
  [reviewsProcessSlice.name]: reviewsProcessSlice.reducer,
  [nearByOffersProcessSlice.name]: nearByOffersProcessSlice.reducer,
  [offersProcessSlice.name]: offersProcessSlice.reducer,
  [userProcessSlice.name]: userProcessSlice.reducer,
});
