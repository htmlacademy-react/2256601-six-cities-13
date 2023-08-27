import { createSlice} from '@reduxjs/toolkit';
import { NameSpace, RequestStatusMap, RequestStatusValue } from '../../const';
import { OfferListItem } from '../../types/offer-list-item';
import { fetchNearbyOffers } from './nearby-offers-thunks';

type NearbyOffersProcess = {
  nearbyOffers: OfferListItem[];
  nearbyOffersStatus: RequestStatusValue;
}

const initialState: NearbyOffersProcess = {
  nearbyOffers: [],
  nearbyOffersStatus: RequestStatusMap.Idle,
};

export const nearbyOffersProcessSlice = createSlice({
  name: NameSpace.NearbyOffers,
  initialState,
  reducers: {
    clearNearbyOffers: (state) => {
      state.nearbyOffers = [];
      state.nearbyOffersStatus = RequestStatusMap.Idle;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNearbyOffers.fulfilled, (state) => {
        state.nearbyOffersStatus = RequestStatusMap.Success;
      })
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.nearbyOffersStatus = RequestStatusMap.Pending;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.nearbyOffersStatus = RequestStatusMap.Failed;
      });
  }
});

export const {clearNearbyOffers} = nearbyOffersProcessSlice.actions;

