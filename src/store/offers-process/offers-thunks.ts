import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';
import { OfferListItem } from '../../types/offer-list-item';

export const fetchOffers = createAsyncThunk<OfferListItem[], undefined, ThunkAPI> (
  `${NameSpace.Offers}/fetch`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferListItem[]>(APIRoute.Offers);
    return data;
  }
);

