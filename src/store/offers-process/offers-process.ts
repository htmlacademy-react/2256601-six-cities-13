import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferListItem } from '../../types/offer-list-item';
import { OfferCard } from '../../types/offer-card';

type OffersProcess = {
  activeCity: string;
  activeId: string | null;
  currentOffer: OfferListItem | null;
  offers: OfferListItem[];
  offerCard: OfferCard | null;
  isOffersLoading: boolean;
  isOfferCardLoading: boolean;
  numberOfFavOffers: number;
}

const initialState: OffersProcess = {
  activeCity: 'Paris',
  activeId: null,
  currentOffer: null,
  offers: [],
  offerCard: null,
  isOffersLoading: false,
  isOfferCardLoading: false,
  numberOfFavOffers: 0,
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
    setCurrentOffer: (state) => {
      const foundOffer = state.offers.find((offer) => offer.id === state.activeId);
      state.currentOffer = foundOffer !== undefined ? foundOffer : null;
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
    setFavOffersNumber: (state) => {
      state.numberOfFavOffers = state.offers.filter((offer) => offer.isFavorite === true).length;
    }
  }
});

export const {setActiveCity, setActiveId, setCurrentOffer, setOffers, setOfferCard, setOffersLoadStatus, setOfferCardLoadStatus, setFavOffersNumber} = offersProcessSlice.actions;

