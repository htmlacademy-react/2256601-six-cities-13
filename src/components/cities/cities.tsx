import { OfferListItem } from '../../types/offer-list-item';
import { CardsList } from '../cards-list/cards-list';
import { Sort } from '../sort/sort';
import { Map } from '../map/map';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getOffersByCity, sorting } from '../../utils';
import { CITY } from '../../mocks/city';
import { Sorting } from '../../types/sorting';

export function Cities () {
  const [selectedOffer, setSelectedOffer] = useState<OfferListItem | undefined> (undefined);
  const [activeSortType, setActiveSortType] = useState<Sorting>('Popular');
  const offersList = useAppSelector((state) => state.offers);
  const activeCityName = useAppSelector((state) => state.city);
  const offersByCity = getOffersByCity(activeCityName, offersList);
  const offersBySorting = sorting[activeSortType](offersByCity);
  const offerHoverHandler = (id: string | undefined) => {
    if (!id) {
      setSelectedOffer (undefined);
    }
    const currentOffer = offersList.find((offer) => offer.id === id);
    setSelectedOffer(currentOffer);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersByCity.length} places to stay in {activeCityName}</b>
          <Sort activeSortType={activeSortType} onChange={(newSortType) => setActiveSortType(newSortType)}/>
          <div className="cities__places-list places__list tabs__content">
            <CardsList cardsList={offersBySorting} pageClass={'cities__card'} onOfferHover={offerHoverHandler}/>
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"><Map city={CITY} offersList={offersByCity} selectedOffer={selectedOffer}/></section>
        </div>
      </div>
    </div>
  );
}
