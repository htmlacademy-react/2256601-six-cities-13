import { CitiesNameValue, NameSpace } from '../../const';
import { State } from '../../types/state';
import { OfferListItem } from '../../types/offer-list-item';
import { OfferCard } from '../../types/offer-card';
import { createSelector } from '@reduxjs/toolkit';
import { getReviewsLoadStatus } from '../reviews-process/reviews-selectors';
import { getNearByoffersLoadStatus } from '../nearby-offers-process/nearby-offers-selectors';
import { Sorting } from '../../types/sorting';
import { sorting } from '../../utils';

export const getActiveCity = (state: State): CitiesNameValue => state[NameSpace.Offers].activeCity;
export const getOffers = (state: State): OfferListItem[] => state[NameSpace.Offers].offers;
export const getOffersByCity = createSelector([getActiveCity, getOffers], (activeCity, offers) => offers.filter((offer) => offer.city.name === activeCity));
export const getOffersFetchingStatus = (state: State) => state[NameSpace.Offers].offersStatus;
/*
export const getActiveId = (state: State): string | undefined => state[NameSpace.Offers].activeId;
export const getActiveSortType = (state: State): Sorting => state[NameSpace.Offers].activeSortType;
export const getCurrentOffer = (state: State): OfferListItem | null => state[NameSpace.Offers].currentOffer;
export const getOffers = (state: State): OfferListItem[] => state[NameSpace.Offers].offers;
export const getOfferCard = (state: State): OfferCard | null => state[NameSpace.Offers].offerCard;
export const getFavOffers = (state: State): OfferListItem[] => state[NameSpace.Offers].favOffers;
export const getOffersLoadStatus = (state: State): boolean => state[NameSpace.Offers].offersStatus;
export const getOfferCardLoadStatus = (state: State): boolean => state[NameSpace.Offers].isOfferCardLoading;
export const getFavOffersLoadStatus = (state: State): boolean => state[NameSpace.Offers].isFavOffersLoading;
export const getHasError = (state: State): boolean => state[NameSpace.Offers].hasError;
export const getFavOffersNumber = (state: State): number => state[NameSpace.Offers].favOffers.length;
export const getOfferPageLoadStatus = createSelector([getOfferCardLoadStatus, getReviewsLoadStatus, getNearByoffersLoadStatus],
  (offerCardLoadStatus, reviewsLoadStatus, nearByOffersLoadStatus) => offerCardLoadStatus || reviewsLoadStatus || nearByOffersLoadStatus);
export const getOffersByCity = createSelector([getActiveCity, getOffers], (activeCity, offers) => offers.filter((offer) => offer.city.name === activeCity));
export const getOffersBySorting = createSelector([getActiveSortType, getOffersByCity], (sortType, offersByCity) => sorting[sortType](offersByCity));
*/
