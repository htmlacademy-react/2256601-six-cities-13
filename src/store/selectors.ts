import { InitialState } from './reducer';

export const activeCity = (state: InitialState) => state.activeCity;

export const offers = (state: InitialState) => state.offers;

export const offerCardData = (state: InitialState) => state.offerCardData;

export const activeId = (state: InitialState) => state.activeId;

export const authorizationStatus = (state: InitialState) => state.authorizationStatus;

export const isOfferLoading = (state: InitialState) => state.isOfferLoading;

export const isOffersLoading = (state: InitialState) => state.isOffersLoading;

export const nearByOffers = (state: InitialState) => state.nearByOffers;

export const isNearByOffersLoading = (state: InitialState) => state.isNearByOffersLoading;

export const reviews = (state: InitialState) => state.reviews;

export const isReviewsLoading = (state: InitialState) => state.isReviewsLoading;

export const isCommentPosting = (state: InitialState) => state.isCommentPosting;
