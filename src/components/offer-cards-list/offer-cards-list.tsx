import { OfferCard } from '../offer-card/offer-card';
import { OfferListItem } from '../../types/offer-list-item';
import { memo} from 'react';

type OfferCardsListProps = {
  offerCardsList: OfferListItem[];
  parentClass: string;
};

function OfferCardsListComponent ({offerCardsList, parentClass}: OfferCardsListProps) {

  return (
    <>
      {offerCardsList.map((offer) =>
        (
          <OfferCard
            key={offer.id}
            offer={offer}
            parentClass={parentClass}
          />
        )
      )}
    </>
  );
}

export const OfferCardsList = memo(OfferCardsListComponent);
