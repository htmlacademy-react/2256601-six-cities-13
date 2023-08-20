import {createReducer} from '@reduxjs/toolkit';
import { OfferListItem } from '../types/offer-list-item';
import { setOffers, setActiveCity, setSortType, setActiveId, loadOffers, loadOffer, setAuthorization, setOfferLoadStatus, setOffersLoadStatus, loadNearByOffers, setNearByOffersLoadStatus, loadReviews, setReviewsLoadStatus, setError } from './actions';
import { Sorting } from '../types/sorting';
import { OfferCardData } from '../types/offer-card-data';
import { AuthorizationStatus } from '../const';
import { Review } from '../types/review';

export type InitialState = {
  activeCity: string;
  offers: OfferListItem[];
  offerCardData: OfferCardData | null;
  activeId: string | null;
  activeSortType: Sorting;
  authorizationStatus: AuthorizationStatus;
  isOfferLoading: boolean;
  isOffersLoading: boolean;
  nearByOffers: OfferListItem[];
  isNearByOffersLoading: boolean;
  reviews: Review[];
  isReviewsLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  activeCity: 'Paris',
  offers: [],
  offerCardData: null,
  activeId: null,
  activeSortType: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isOfferLoading: false,
  isOffersLoading: false,
  nearByOffers: [],
  isNearByOffersLoading: false,
  reviews: [],
  isReviewsLoading: false,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.activeSortType = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setActiveId, (state, action) => {
      state.activeId = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offerCardData = action.payload;
    })
    .addCase(setAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOfferLoadStatus, (state, action) => {
      state.isOfferLoading = action.payload;
    })
    .addCase(setOffersLoadStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(loadNearByOffers, (state, action) => {
      state.nearByOffers = action.payload;
    })
    .addCase(setNearByOffersLoadStatus, (state, action) => {
      state.isNearByOffersLoading = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setReviewsLoadStatus, (state, action) => {
      state.isReviewsLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
