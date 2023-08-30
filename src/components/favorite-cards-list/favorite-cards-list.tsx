import { Link } from 'react-router-dom';
import { OfferCard } from '../offer-card/offer-card';
import { OfferListItem } from '../../types/offer-list-item';
import { getCitiesByOffers } from '../../utils';

type FavoritesCardListProps = {
  favoriteOffers: OfferListItem[];
  parentClass: string;
}

export function FavoritesCardList ({favoriteOffers, parentClass}: FavoritesCardListProps) {
  const favoriteCities = getCitiesByOffers(favoriteOffers);

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
                <OfferCard key={offer.id} offer={offer} parentClass={parentClass}/>)
            }
          </div>
        </li>
      ))}
    </ul>
  );
}
