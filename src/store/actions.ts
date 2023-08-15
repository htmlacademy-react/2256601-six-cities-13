import { createAction } from '@reduxjs/toolkit';
import { NameAction } from '../const';
import { OfferListItem } from '../types/offer-list-item';
import { OfferCardData } from '../types/offer-card-data';
import { Sorting } from '../types/sorting';

export const fetchOffers = createAction(`${NameAction.Offers}/fetch`, (offers: OfferListItem[]) => ({payload: offers}));

export const setActiveCity = createAction(`${NameAction.Offers}/setActiveCity`, (city: string | undefined) => ({payload: city}));

export const setSortType = createAction(`${NameAction.Offers}/setSortType`, (sortType: Sorting) => ({payload: sortType}));

export const fetchOffer = createAction<OfferCardData['id']>(`${NameAction.Offer}/fetch`);

export const fetchNearPlaces = createAction<OfferListItem['id']>(`${NameAction.NearPlaces}/fetch`);

export const fetchReviews = createAction<OfferListItem['id']>(`${NameAction.Reviews}/fetch`);

export const fetchFavorites = createAction(`${NameAction.Favorites}/fetch`);

export const dropOffer = createAction(`${NameAction.Offer}/drop`);


