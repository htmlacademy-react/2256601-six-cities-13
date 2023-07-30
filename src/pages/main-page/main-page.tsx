import { OfferListItem } from '../../types/offer-list-item';
import { Header } from '../../components/header/header';
import { LocationsList } from '../../components/locations-list/locations-list';
import { Cities } from '../../cities/cities';

type MainPageProps = {
  offersList: OfferListItem[];
}

export function MainPage ({offersList}: MainPageProps) {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList/>
          </section>
        </div>
        <Cities offersList={offersList}/>
      </main>
    </div>
  );
}

