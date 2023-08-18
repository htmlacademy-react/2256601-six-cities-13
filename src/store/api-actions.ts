import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state';
import { State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, NameAction } from '../const';
import { loadNearByOffers, loadOffer, loadOffers, loadReviews, setNearByOffersLoadStatus, setOfferLoadStatus, setOffersLoadStatus, setReviewsLoadStatus } from './actions';
import { OfferListItem } from '../types/offer-list-item';
import { OfferCardData } from '../types/offer-card-data';
import { Review } from '../types/review';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameAction.Offers}/fetch`,
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadStatus(true));
    const {data} = await api.get<OfferListItem[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setOffersLoadStatus(false));
  }
);

export const fetchOffer = createAsyncThunk<void, {id: string | undefined}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameAction.Offer}/fetch`,
  async ({id}, {dispatch, extra: api}) => {
    dispatch(setOfferLoadStatus(true));
    const url = id !== undefined ? `${APIRoute.Offers}/${id}` : '';
    const {data} = await api.get<OfferCardData>(url);
    dispatch(loadOffer(data));
    dispatch(setOfferLoadStatus(false));
  }
);

export const fetchNearByOffers = createAsyncThunk<void, {id: string | undefined}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameAction.NearPlaces}/fetch`,
  async ({id}, {dispatch, extra: api}) => {
    dispatch(setNearByOffersLoadStatus(true));
    const url = id !== undefined ? `${APIRoute.Offers}/${id}/nearBy` : '';
    const {data} = await api.get<OfferListItem[]>(url);
    dispatch(loadNearByOffers(data));
    dispatch(setNearByOffersLoadStatus(false));
  }
);

export const fetchReviews = createAsyncThunk<void, {id: string | undefined}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameAction.Reviews}/fetch`,
  async ({id}, {dispatch, extra: api}) => {
    dispatch(setReviewsLoadStatus(true));
    const url = id !== undefined ? `${APIRoute.Comments}/${id}` : '';
    const {data} = await api.get<Review[]>(url);
    dispatch(loadReviews(data));
    dispatch(setReviewsLoadStatus(false));
  }
);

