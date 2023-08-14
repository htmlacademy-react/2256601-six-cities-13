import {createReducer} from '@reduxjs/toolkit';
import { OfferListItem } from '../types/offer-list-item';
import { fetchOffers, setActiveCity, setSortType } from './actions';
import { offersMock } from '../mocks/offers-mock';
import { Sorting } from '../types/sorting';

const initialState: {
  offers: OfferListItem[];
  city: string | undefined ;
  sortType: Sorting;
} = {
  offers: offersMock,
  city: 'Paris',
  sortType: 'Popular'
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    });
});
