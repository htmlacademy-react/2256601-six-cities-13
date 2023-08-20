import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state';
import { State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus, NameAction, TIMEOUT_SHOW_ERROR } from '../const';
import { loadNearByOffers, loadOffer, loadOffers, loadReviews, setAuthorization, setError, setNearByOffersLoadStatus, setOfferLoadStatus, setOffersLoadStatus, setReviewsLoadStatus } from './actions';
import { OfferListItem } from '../types/offer-list-item';
import { OfferCardData } from '../types/offer-card-data';
import { Review } from '../types/review';
import { store } from '.';
import { dropToken, saveToken } from '../services/token';

export const clearError = createAsyncThunk(
  `${NameAction.Error}/clear`,
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  }
);

export type ThunkObj = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export const fetchOffers = createAsyncThunk<void, undefined, ThunkObj> (
  `${NameAction.Offers}/fetch`,
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadStatus(true));
    const {data} = await api.get<OfferListItem[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setOffersLoadStatus(false));
  }
);

export const fetchOffer = createAsyncThunk<void, {id: string | undefined}, ThunkObj> (
  `${NameAction.Offer}/fetch`,
  async ({id}, {dispatch, extra: api}) => {
    dispatch(setOfferLoadStatus(true));
    const url = id !== undefined ? `${APIRoute.Offers}/${id}` : '';
    const {data} = await api.get<OfferCardData>(url);
    dispatch(loadOffer(data));
    dispatch(setOfferLoadStatus(false));
  }
);

export const fetchNearByOffers = createAsyncThunk<void, {id: string | undefined}, ThunkObj> (
  `${NameAction.NearPlaces}/fetch`,
  async ({id}, {dispatch, extra: api}) => {
    dispatch(setNearByOffersLoadStatus(true));
    const url = id !== undefined ? `${APIRoute.Offers}/${id}/nearBy` : '';
    const {data} = await api.get<OfferListItem[]>(url);
    dispatch(loadNearByOffers(data));
    dispatch(setNearByOffersLoadStatus(false));
  }
);

export const fetchReviews = createAsyncThunk<void, {id: string | undefined}, ThunkObj> (
  `${NameAction.Reviews}/fetch`,
  async ({id}, {dispatch, extra: api}) => {
    dispatch(setReviewsLoadStatus(true));
    const url = id !== undefined ? `${APIRoute.Comments}/${id}` : '';
    const {data} = await api.get<Review[]>(url);
    dispatch(loadReviews(data));
    dispatch(setReviewsLoadStatus(false));
  }
);

export const checkAuth = createAsyncThunk<void, undefined, ThunkObj> (
  `${NameAction.User}/checkAuth`,
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const login = createAsyncThunk<void, AuthData, ThunkObj> (
  `${NameAction.User}/login`,
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAuthorization(AuthorizationStatus.Auth));
  }
);

export const logout = createAsyncThunk<void, undefined, ThunkObj> (
  `${NameAction.User}/logout`,
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorization(AuthorizationStatus.NoAuth));
  }
);
