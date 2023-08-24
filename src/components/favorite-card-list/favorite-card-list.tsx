import { Link } from 'react-router-dom';
import { Card } from '../card/card';
import { OfferListItem } from '../../types/offer-list-item';

type FavoritesCardListProps = {
  favoriteOffers: OfferListItem[];
  pageClass: string;
}

export function FavoritesCardList ({favoriteOffers, pageClass}: FavoritesCardListProps) {
  const favoriteCities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));

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
            {
              favoriteOffers.filter((offer) =>
                offer.city.name === city).map((offer) =>
                <Card key={offer.id} offer={offer} pageClass={pageClass}/>)
            }
          </div>
        </li>
      ))}
    </ul>
  );
}
