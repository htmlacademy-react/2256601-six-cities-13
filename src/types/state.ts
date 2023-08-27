import { store } from '../store';
import { AxiosInstance } from 'axios';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ThunkAPI = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};
