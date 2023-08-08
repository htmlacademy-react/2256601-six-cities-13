import {createReducer} from '@reduxjs/toolkit';
import { OfferListItem } from '../types/offer-list-item';
import { fetchOffers } from './actions';
import { offersMock } from '../mocks/offers-mock';

const initialState: {
  offers: OfferListItem[];
} = {
  offers:[]
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offersMock;
    });
});
