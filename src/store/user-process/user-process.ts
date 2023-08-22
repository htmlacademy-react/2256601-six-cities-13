import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '../../const';
import { checkAuth, UserData, login, logout } from '../api-actions';

type UserProcess = {
  authorizationStatus: AuthStatus;
  userData: UserData | null;
}

const initialState: UserProcess = {
  authorizationStatus: AuthStatus.Unknown,
  userData: null,
};

export const userProcessSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.Auth;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      })
      .addCase(login.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      });
  }
});

export const {setUserData} = userProcessSlice.actions;
