import { createSlice, } from '@reduxjs/toolkit';
import { NameSpace, RequestStatusMap, RequestStatusValue } from '../../const';
import { OfferListItem } from '../../types/offer-list-item';
import { changeFavorite, fetchFavorites } from './favorite-offers-thunks';

type FavoritesProcess = {
  favorites: OfferListItem[];
  favoritesStatus: RequestStatusValue;
  favoritesCount: number;
}

const FavoriteChangeRequest = {
  Add: 1,
  Remove: 0
};

const initialState: FavoritesProcess = {
  favorites: [],
  favoritesStatus: RequestStatusMap.Idle,
  favoritesCount: 0,
};

export const favoritesProcessSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    clearFavorites: (state) => {
      state.favorites = [];
      state.favoritesStatus = RequestStatusMap.Idle;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.favoritesStatus = RequestStatusMap.Success;
        state.favoritesCount = state.favorites.length;
      })
      .addCase(fetchFavorites.pending, (state) => {
        state.favoritesStatus = RequestStatusMap.Pending;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.favoritesStatus = RequestStatusMap.Failed;
      })
      .addCase(changeFavorite.fulfilled, (state, action) => {
        state.favoritesStatus = RequestStatusMap.Success;
        switch (action.payload.status) {
          case FavoriteChangeRequest.Add:
            state.favorites.push(action.payload.offer);
            ++state.favoritesCount;
            break;
          case FavoriteChangeRequest.Remove:
            state.favorites = state.favorites.filter(({id}) => id !== action.payload.offer.id);
            --state.favoritesCount;
        }
      })
      .addCase(changeFavorite.pending, (state) => {
        state.favoritesStatus = RequestStatusMap.Pending;
      })
      .addCase(changeFavorite.rejected, (state) => {
        state.favoritesStatus = RequestStatusMap.Failed;
      });
  }
});

export const {clearFavorites} = favoritesProcessSlice.actions;

