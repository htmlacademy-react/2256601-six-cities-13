import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getFavoritesCount = (state: State) => state[NameSpace.Favorites].favoritesCount;
