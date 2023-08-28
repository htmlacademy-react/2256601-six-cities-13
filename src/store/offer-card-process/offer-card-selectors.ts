import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getHighlightedOffer = (state: State) => state[NameSpace.OfferCard].offerHighlighted;
