import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, RequestStatusMap, RequestStatusValue } from '../../const';
import { OfferCard } from '../../types/offer-card';
import { fetchOfferCard } from './offer-card-thunks';


type OfferCardProcess = {
  offerCard: OfferCard | null;
  offerCardStatus: RequestStatusValue;
  offerHighlighted?: string | null;
}

const initialState: OfferCardProcess = {
  offerCard: null,
  offerCardStatus: RequestStatusMap.Idle,
  offerHighlighted: null,
};

export const offerCardProcessSlice = createSlice({
  name: NameSpace.OfferCard,
  initialState,
  reducers: {
    clearOfferCard: (state) => {
      state.offerCard = null;
      state.offerCardStatus = RequestStatusMap.Idle;
      state.offerHighlighted = null;
    },
    setOfferHighlighted: (state, action: PayloadAction<string | null>) => {
      state.offerHighlighted = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferCard.fulfilled, (state, action) => {
        state.offerCard = action.payload;
        state.offerCardStatus = RequestStatusMap.Success;
      })
      .addCase(fetchOfferCard.pending, (state) => {
        state.offerCardStatus = RequestStatusMap.Pending;
      })
      .addCase(fetchOfferCard.rejected, (state) => {
        state.offerCardStatus = RequestStatusMap.Failed;
      });
  }
});

export const {clearOfferCard, setOfferHighlighted} = offerCardProcessSlice.actions;
