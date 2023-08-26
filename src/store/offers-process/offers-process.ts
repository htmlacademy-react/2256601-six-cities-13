import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferListItem } from '../../types/offer-list-item';
import { OfferCard } from '../../types/offer-card';
import { Sorting } from '../../types/sorting';

type OffersProcess = {
  activeCity: string;
  activeId: string | undefined;
  activeSortType: Sorting;
  currentOffer: OfferListItem | null;
  offers: OfferListItem[];
  offerCard: OfferCard | null;
  favOffers: OfferListItem[];
  isOffersLoading: boolean;
  isOfferCardLoading: boolean;
  isFavOffersLoading: boolean;
  hasError: boolean;
}

const initialState: OffersProcess = {
  activeCity: 'Paris',
  activeId: undefined,
  activeSortType: 'Popular',
  currentOffer: null,
  offers: [],
  offerCard: null,
  favOffers: [],
  isOffersLoading: false,
  isOfferCardLoading: false,
  isFavOffersLoading: false,
  hasError: false,
};

export const offersProcessSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<string>) => {
      state.activeCity = action.payload;
    },
    setActiveId: (state, action: PayloadAction<string | undefined>) => {
      state.activeId = action.payload;
    },
    setActiveSortType: (state, action: PayloadAction<Sorting>) => {
      state.activeSortType = action.payload;
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
    setFavOffers: (state, action: PayloadAction<OfferListItem[]>) => {
      state.favOffers = action.payload;
    },
    setOffersLoadStatus: (state, action: PayloadAction<boolean>) => {
      state.isOffersLoading = action.payload;
    },
    setOfferCardLoadStatus: (state, action: PayloadAction<boolean>) => {
      state.isOfferCardLoading = action.payload;
    },
    setFavOffersLoadStatus: (state, action: PayloadAction<boolean>) => {
      state.isFavOffersLoading = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    }
  }
});

export const {setActiveCity, setActiveId, setActiveSortType, setCurrentOffer, setOffers, setOfferCard, setFavOffers, setOffersLoadStatus, setOfferCardLoadStatus, setFavOffersLoadStatus, setError} = offersProcessSlice.actions;

