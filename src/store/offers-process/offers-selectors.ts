import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { OfferListItem } from '../../types/offer-list-item';
import { OfferCard } from '../../types/offer-card';
import { createSelector } from '@reduxjs/toolkit';
import { getReviews, getReviewsLoadStatus } from '../reviews-process/reviews-selectors';
import { getNearByOffers, getNearByoffersLoadStatus } from '../nearby-offers-process/nearby-offers-selectors';

export const getActiveCity = (state: State): string => state[NameSpace.Offers].activeCity;
export const getActiveId = (state: State): string | null => state[NameSpace.Offers].activeId;
export const getCurrentOffer = (state: State): OfferListItem | null => state[NameSpace.Offers].currentOffer;
export const getOffers = (state: State): OfferListItem[] => state[NameSpace.Offers].offers;
export const getOfferCard = (state: State): OfferCard | null => state[NameSpace.Offers].offerCard;
export const getOffersLoadStatus = (state: State): boolean => state[NameSpace.Offers].isOffersLoading;
export const getOfferCardLoadStatus = (state: State): boolean => state[NameSpace.Offers].isOfferCardLoading;
export const getOfferPageLoadStatus = createSelector([getOfferCardLoadStatus, getReviewsLoadStatus, getNearByoffersLoadStatus],
  (offerCardLoadStatus, reviewsLoadStatus, nearByOffersLoadStatus) => offerCardLoadStatus || reviewsLoadStatus || nearByOffersLoadStatus);
export const getDataLoadStatusFromServer = createSelector([getOfferCard, getOffers, getReviews, getNearByOffers],
  (offerCard, Offers, reviews, nearByOffers) => offerCard === null || Offers.length === 0 || reviews.length === 0 || nearByOffers.length === 0);
