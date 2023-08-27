/*
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state';
import { State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, COUNT_NEARBY_OFFERS, NameSpace, SHOWABLE_REVIEWS} from '../const';
import { redirectToRoute} from './actions';
import { OfferListItem } from '../types/offer-list-item';
import { OfferCard } from '../types/offer-card';
import { Review } from '../types/review';
import { removeToken, saveToken } from '../services/token';
import { setOfferCard, setOfferCardLoadStatus, setOffers, setOffersLoadStatus, setError, setFavOffersLoadStatus, setFavOffers } from './offers-process/offers-process';
import { setNearByOffers, setNearByOffersLoadStatus } from './nearby-offers-process/nearby-offers-process';
import { setCommentPostStatus, setReviews, setReviewsLoadStatus } from './reviews-process/reviews-process';
import { setUserData } from './user-process/user-process';
import { getRandomUniqueValuesFromArray } from '../utils';
import {toast} from 'react-toastify';

export type AuthData = {
  email: string;
  password: string;
};

export type UserData = {
  avatarUrl: string;
  password: string;
  email: string;
  token: string;
};

export type CommentData = {
  id: string;
  comment: string;
  rating: number;
};

export type FavData = {
  id: string;
  status: 0 | 1;
};

export const fetchOffers = createAsyncThunk<void, undefined, ThunkObj> (
  `${NameSpace.Offers}/fetch`,
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setOffersLoadStatus(true));
      const {data} = await api.get<OfferListItem[]>(APIRoute.Offers);
      dispatch(setOffers(data));
      dispatch(setError(false));
    } catch {
      dispatch(setError(true));
    } finally {
      dispatch(setOffersLoadStatus(false));
    }
  }
);

export const fetchOfferCard = createAsyncThunk<void, {id: string | undefined}, ThunkObj> (
  `${NameSpace.OfferCard}/fetch`,
  async ({id}, {dispatch, extra: api}) => {
    try {
      dispatch(setOffersLoadStatus(true));
      const url = id !== undefined ? `${APIRoute.Offers}/${id}` : '';
      const {data} = await api.get<OfferCard>(url);
      dispatch(setOfferCard(data));
      dispatch(setOfferCardLoadStatus(false));
    } catch {
      toast.error('Offer is not available, please try again');
    }
  }
);

export const fetchNearByOffers = createAsyncThunk<void, {id: string | undefined}, ThunkObj> (
  `${NameSpace.NearByOffers}/fetch`,
  async ({id}, {dispatch, extra: api}) => {
    try {
      dispatch(setNearByOffersLoadStatus(true));
      const url = id !== undefined ? `${APIRoute.Offers}/${id}/nearBy` : '';
      const {data} = await api.get<OfferListItem[]>(url);
      const nearByOffers = getRandomUniqueValuesFromArray(data, COUNT_NEARBY_OFFERS);
      dispatch(setNearByOffers(nearByOffers));
      dispatch(setNearByOffersLoadStatus(false));
    } catch {
      toast.error('Nearby offers are not available, please try again');
    }
  }
);

export const fetchReviews = createAsyncThunk<void, {id: string | undefined}, ThunkObj> (
  `${NameSpace.Reviews}/fetch`,
  async ({id}, {dispatch, extra: api}) => {
    try {
      dispatch(setReviewsLoadStatus(true));
      const url = id !== undefined ? `${APIRoute.Comments}/${id}` : '';
      const {data} = await api.get<Review[]>(url);
      const filteredReviews = data.slice(SHOWABLE_REVIEWS).reverse();
      dispatch(setReviews(filteredReviews));
      dispatch(setReviewsLoadStatus(false));
    } catch {
      toast.error('Reviews are not available, please try again');
    }
  }
);

export const checkAuth = createAsyncThunk<void, undefined, ThunkObj> (
  `${NameSpace.User}/checkAuth`,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    dispatch(setUserData(data));
  }
);

export const login = createAsyncThunk<void, AuthData, ThunkObj> (
  `${NameSpace.User}/login`,
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(checkAuth());
    dispatch(fetchOffers());
  }
);

export const logout = createAsyncThunk<void, undefined, ThunkObj> (
  `${NameSpace.User}/logout`,
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    removeToken();
  }
);

export const postComment = createAsyncThunk<void, CommentData, ThunkObj> (
  `${NameSpace.Reviews}/post`,
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    try {
      dispatch(setCommentPostStatus(true));
      const url = `${APIRoute.Comments}/${id}`;
      await api.post<CommentData>(url, {comment, rating});
    } catch {
      toast.error('You can\'t post comment now, please try again later');
    } finally {
      dispatch(setCommentPostStatus(false));
    }
  }
);

export const changeFavStatus = createAsyncThunk<void, FavData, ThunkObj> (
  `${NameSpace.Offers}/changeFavStatus`,
  async ({id, status}, {dispatch, extra: api}) => {
    try {
      const url = `${APIRoute.Favorite}/${id}/${status}`;
      await api.post(url);
      dispatch(fetchOffers());
    } catch {
      toast.error('You can\'t change status now, please try again later');
    }
  }
);

export const fetchFavOffers = createAsyncThunk<void, undefined, ThunkObj> (
  `${NameSpace.Offers}/fetchFavOffers`,
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setFavOffersLoadStatus(true));
      const {data: favoriteOffers} = await api.get<OfferListItem[]>(APIRoute.Favorite);
      dispatch(setFavOffers(favoriteOffers));
    } catch {
      toast.error('Favorite place are not available, please try again later');
    } finally {
      dispatch(setFavOffersLoadStatus(false));
    }
  }
);
*/
