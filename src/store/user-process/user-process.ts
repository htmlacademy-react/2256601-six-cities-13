import { createSlice} from '@reduxjs/toolkit';
import { AuthStatus, AuthStatusValue, NameSpace } from '../../const';
import { UserData, checkAuth, login, logout } from './user-thunks';

type UserProcess = {
  user: UserData | null;
  authorizationStatus: AuthStatusValue;
}

const initialState: UserProcess = {
  authorizationStatus: AuthStatus.Unknown,
  user: null,
};

export const userProcessSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.authorizationStatus = AuthStatus.NoAuth;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthStatus.Auth;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
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

export const {clearUser} = userProcessSlice.actions;
