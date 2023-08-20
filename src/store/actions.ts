import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameAction } from '../const';
import { OfferListItem } from '../types/offer-list-item';
import { OfferCardData } from '../types/offer-card-data';
import { Sorting } from '../types/sorting';
import { Review } from '../types/review';
import { AppRoute } from '../const';

export const setActiveCity = createAction(`${NameAction.Offers}/setActiveCity`, (city: string) => ({payload: city}));

export const setSortType = createAction(`${NameAction.Offers}/setSortType`, (sortType: Sorting) => ({payload: sortType}));

export const setOffers = createAction(`${NameAction.Offers}/setOffers`, (offers: OfferListItem[]) => ({payload: offers}));

export const setActiveId = createAction(`${NameAction.Offers}/setActiveId`, (activeId: string) => ({payload: activeId}));

export const loadOffers = createAction(`${NameAction.Offers}/loadOffers`, (offers: OfferListItem[]) => ({payload: offers}));

export const loadOffer = createAction(`${NameAction.Offer}/loadOffer`, (offer: OfferCardData | null) => ({payload: offer}));

export const setAuthorization = createAction(`${NameAction.User}/requireAuthorization`, (authorizationStatus: AuthorizationStatus) => ({payload: authorizationStatus}));

export const setOfferLoadStatus = createAction(`${NameAction.Offer}/setOfferLoadStatus`, (status: boolean) => ({payload: status}));

export const setOffersLoadStatus = createAction(`${NameAction.Offers}/setOffersLoadingStatus`, (status: boolean) => ({payload: status}));

export const loadNearByOffers = createAction(`${NameAction.NearPlaces}/loadNearByOffers`, (nearByOffers: OfferListItem[]) => ({payload: nearByOffers}));

export const setNearByOffersLoadStatus = createAction(`${NameAction.NearPlaces}/setNearByOffersLoadStatus`, (status: boolean) => ({payload: status}));

export const loadReviews = createAction(`${NameAction.Reviews}/loadReviews`, (reviews: Review[]) => ({payload: reviews}));

export const setReviewsLoadStatus = createAction(`${NameAction.Reviews}/setReviwsLoadStatus`, (status: boolean) => ({payload: status}));

export const redirectToRoute = createAction('redirectToRoute', (route: AppRoute) => ({payload: route}));
