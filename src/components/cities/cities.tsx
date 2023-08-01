import { City, OfferListItem } from '../../types/offer-list-item';
import { CardsList } from '../cards-list/cards-list';
import { Sort } from '../sort/sort';
import { Map } from '../map/map';
import { useState } from 'react';

export type CitiesProps = {
  offersList: OfferListItem[];
  city: City;
}

export function Cities ({offersList, city}: CitiesProps) {
  const [selectedOffer, setSelectedOffer] = useState<OfferListItem | undefined> (undefined);
  const offerHoverHandler = (id: string | undefined) => {
    const currentOffer = offersList.find((offer) => offer.id === id);
    setSelectedOffer(currentOffer);
  };
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersList.length} places to stay in Amsterdam</b>
          <Sort/>
          <div className="cities__places-list places__list tabs__content">
            <CardsList cardsList={offersList} pageClass={'cities__card'} offerHoverHandler={offerHoverHandler}/>
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"><Map city={city} offersList={offersList} selectedOffer={selectedOffer}/></section>
        </div>
      </div>
    </div>
  );
}
