import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getHighlightedOffer = (state: State) => state[NameSpace.OfferCard].offerHighlighted;
export const getOfferId = (state: State) => state[NameSpace.OfferCard].offerCard?.id;
export const getOfferCard = (state: State) => state[NameSpace.OfferCard].offerCard;
export const getOfferCardFetchingStatus = (state: State) => state[NameSpace.OfferCard].offerCardStatus;
