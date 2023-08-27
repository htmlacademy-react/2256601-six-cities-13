import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';
import { OfferListItem } from '../../types/offer-list-item';

export const fetchNearbyOffers = createAsyncThunk<OfferListItem[], OfferListItem['id'], ThunkAPI> (
  `${NameSpace.NearbyOffers}/fetch`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferListItem[]>(`${APIRoute.Offers}/${offerId}${APIRoute.NearbyOffers}`);
    return data;
  }
);

