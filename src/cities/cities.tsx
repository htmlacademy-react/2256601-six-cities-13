import { OfferListItem } from '../types/offer-list-item';
import { CardsList } from '../components/cards-list/cards-list';
import { Sort } from '../components/sort/sort';


export type CitiesProps = {
  offersList: OfferListItem[];
}

export function Cities ({offersList}: CitiesProps) {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersList.length} places to stay in Amsterdam</b>
          <Sort/>
          <div className="cities__places-list places__list tabs__content">
            <CardsList cardsList={offersList} pageClass={'cities__card'}/>
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
}
