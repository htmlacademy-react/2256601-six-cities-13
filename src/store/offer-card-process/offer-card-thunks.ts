import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferCard } from '../../types/offer-card';
import { ThunkAPI } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';

export const fetchOfferCard = createAsyncThunk <OfferCard, OfferCard['id'], ThunkAPI> (
  `${NameSpace.OfferCard}/fetch`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferCard>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);
