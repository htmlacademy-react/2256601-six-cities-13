import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';
import { OfferListItem } from '../../types/offer-list-item';

type FavoritesChangeRequest = {
  offerId: string;
  status: number;
}

type FavoriteChangeResponse = {
  offer: OfferListItem;
  status: number;
}

export const fetchFavorites = createAsyncThunk<OfferListItem[], undefined, ThunkAPI> (
  `${NameSpace.Favorites}/fetch`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferListItem[]>(APIRoute.Favorites);
    return data;
  }
);

export const changeFavorite = createAsyncThunk<FavoriteChangeResponse, FavoritesChangeRequest, ThunkAPI> (
  `${NameSpace.Favorites}/change`,
  async ({offerId, status}, {extra: api}) => {
    const response = await api.get<OfferListItem>(`${APIRoute.Favorites}/${offerId}/${status}`);
    return {offer: response.data, status};
  }
);
