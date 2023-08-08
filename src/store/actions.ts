import { createAction } from '@reduxjs/toolkit';
import { NameAction } from '../const';
import { City, OfferListItem } from '../types/offer-list-item';

export const fetchOffers = createAction(`${NameAction.Offers}/fetch`);

export const fetchOffer = createAction<OfferListItem['id']>(`${NameAction.Offer}/fetch`);

export const fetchNearPlaces = createAction<OfferListItem['id']>(`${NameAction.NearPlaces}/fetch`);

export const fetchReviews = createAction<OfferListItem['id']>(`${NameAction.Reviews}/fetch`);

export const fetchFavorites = createAction(`${NameAction.Favorites}/fetch`);

export const dropOffer = createAction(`${NameAction.Offer}/drop`);

export const setActiveCity = createAction<City>(`${NameAction.Offers}/setActiveCity`);
