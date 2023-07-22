import { Link } from 'react-router-dom';
import { OffersList } from '../../types/offers-list';
import { Card } from '../card/card';

type FavoritesCardListProps = {
  offerList: OffersList[];
}

export function FavoritesCardList ({offerList}: FavoritesCardListProps) {
  const favoriteOffers = offerList.filter((offer) => offer.isFavorite === true);
  const favoriteCities = new Set<string>();
  favoriteOffers.forEach((offer) => favoriteCities.add(offer.city.name));

  return (
    <ul className="favorites__list">
      {Array.from(favoriteCities.values()).map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {favoriteOffers.filter((offer) => offer.city.name === city).map((offer) => <Card key={offer.id} offer={offer}/>)}
          </div>
        </li>
      ))}
    </ul>
  );
}
