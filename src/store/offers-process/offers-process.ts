import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitiesNameValue, NameSpace, RequestStatusMap, RequestStatusValue } from '../../const';
import { OfferListItem } from '../../types/offer-list-item';
import { fetchOffers } from './offers-thunks';

type OffersProcess = {
  activeCity: CitiesNameValue;
  offers: OfferListItem[];
  offersStatus: RequestStatusValue;
}

const initialState: OffersProcess = {
  activeCity: 'Paris',
  offers: [],
  offersStatus: RequestStatusMap.Idle,
};

export const offersProcessSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<CitiesNameValue>) => {
      state.activeCity = action.payload;
    },
    clearOffers: (state) => {
      state.offers = [];
      state.offersStatus = RequestStatusMap.Idle;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersStatus = RequestStatusMap.Success;
      })
      .addCase(fetchOffers.pending, (state) => {
        state.offersStatus = RequestStatusMap.Pending;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.offersStatus = RequestStatusMap.Failed;
      });
  }
});

export const {setActiveCity, clearOffers } = offersProcessSlice.actions;

