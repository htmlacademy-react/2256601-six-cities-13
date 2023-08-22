import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferListItem } from '../../types/offer-list-item';
import { OfferCard } from '../../types/offer-card';

type OffersProcess = {
  activeCity: string;
  activeId: string | null;
  offers: OfferListItem[];
  offerCard: OfferCard | null;
  isOffersLoading: boolean;
  isOfferCardLoading: boolean;
}

const initialState: OffersProcess = {
  activeCity: 'Paris',
  activeId: null,
  offers: [],
  offerCard: null,
  isOffersLoading: false,
  isOfferCardLoading: false,
};

export const offersProcessSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<string>) => {
      state.activeCity = action.payload;
    },
    setActiveId: (state, action: PayloadAction<string | null>) => {
      state.activeId = action.payload;
    },
    setOffers: (state, action: PayloadAction<OfferListItem[]>) => {
      state.offers = action.payload;
    },
    setOfferCard: (state, action: PayloadAction<OfferCard | null>) => {
      state.offerCard = action.payload;
    },
    setOffersLoadStatus: (state, action: PayloadAction<boolean>) => {
      state.isOffersLoading = action.payload;
    },
    setOfferCardLoadStatus: (state, action: PayloadAction<boolean>) => {
      state.isOfferCardLoading = action.payload;
    },
  }
});

export const {setActiveCity, setActiveId, setOffers, setOfferCard, setOffersLoadStatus, setOfferCardLoadStatus} = offersProcessSlice.actions;

