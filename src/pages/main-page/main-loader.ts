import { store } from '../../store';
import { fetchOffers } from '../../store/offers-process/offers-thunks';

export const loadMainPageData = () => store.dispatch(fetchOffers());
