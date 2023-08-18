import { OfferListItem } from '../../types/offer-list-item';
import { CardsList } from '../cards-list/cards-list';
import { Sort } from '../sort/sort';
import { Map } from '../map/map';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getOffersByCity, sorting } from '../../utils';
import { Sorting } from '../../types/sorting';
import * as selectors from '../../store/selectors';
import { LoadingScreen } from '../../pages/loading-screen/loading-screen';

export function Cities () {
  const [selectedOffer, setSelectedOffer] = useState<OfferListItem | undefined> (undefined);
  const [activeSortType, setActiveSortType] = useState<Sorting>('Popular');
  const offersList = useAppSelector(selectors.offers);
  const isOffersLoading = useAppSelector(selectors.isOffersLoading);
  const activeCityName = useAppSelector(selectors.activeCity);
  const offersByCity = getOffersByCity(activeCityName, offersList);
  const offersBySorting = sorting[activeSortType](offersByCity);

  if (isOffersLoading || offersList.length === 0) {
    return (
      <LoadingScreen/>
    );
  }

  const offerHoverHandler = (id: string | undefined) => {
    if (!id) {
      setSelectedOffer (undefined);
    }
    const currentOffer = offersList.find((offer) => offer.id === id);
    setSelectedOffer(currentOffer);
  };
  const currentCity = offersByCity[0].city;

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
          <section className="cities__map map"><Map city={currentCity} offersList={offersByCity} selectedOffer={selectedOffer}/></section>
        </div>
      </div>
    </div>
  );
}
