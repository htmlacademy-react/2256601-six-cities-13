import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';
import { removeToken, saveToken } from '../../services/token';

export type UserData = {
  name: string;
	avatarUrl: string;
	isPro: boolean;
	email: string;
	token: string;
}

type LoginData = {
  email: string;
  password: string;
}

export const checkAuth = createAsyncThunk<UserData, undefined, ThunkAPI> (
  `${NameSpace.User}/checkAuth`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const login = createAsyncThunk<UserData, LoginData, ThunkAPI> (
  `${NameSpace.User}/login`,
  async (body, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, body);
    saveToken(data.token);
    return data;
  }
);

export const logout = createAsyncThunk<unknown, undefined, ThunkAPI> (
  `${NameSpace.User}/logout`,
  async (_arg, {extra: api}) => {
    await api.delete<string>(APIRoute.Logout);
    removeToken();
  }
);
