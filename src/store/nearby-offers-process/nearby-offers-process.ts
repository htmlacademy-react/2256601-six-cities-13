import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferListItem } from '../../types/offer-list-item';

type NearByOffersProcess = {
  nearByOffers: OfferListItem[];
  isNearByOffersLoading: boolean;
}

const initialState: NearByOffersProcess = {
  nearByOffers: [],
  isNearByOffersLoading: false,
};

export const nearByOffersProcessSlice = createSlice({
  name: NameSpace.NearByOffers,
  initialState,
  reducers: {
    setNearByOffers: (state, action: PayloadAction<OfferListItem[]>) => {
      state.nearByOffers = action.payload;
    },
    setNearByOffersLoadStatus: (state, action: PayloadAction<boolean>) => {
      state.isNearByOffersLoading = action.payload;
    }
  }
});

export const {setNearByOffers, setNearByOffersLoadStatus} = nearByOffersProcessSlice.actions;

