import {createReducer} from '@reduxjs/toolkit';
import { OfferListItem } from '../types/offer-list-item';
import { fetchOffers, setActiveCity } from './actions';
import { offersMock } from '../mocks/offers-mock';

const initialState: {
  offers: OfferListItem[];
  city: string | undefined ;
} = {
  offers: offersMock,
  city: 'Paris',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offersMock;
    })
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    });
});
