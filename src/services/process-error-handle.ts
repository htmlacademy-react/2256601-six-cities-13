import { store } from '../store';
import { setError } from '../store/actions';
import { clearError } from '../store/api-actions';


export const processErrorHandler = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearError());
};

