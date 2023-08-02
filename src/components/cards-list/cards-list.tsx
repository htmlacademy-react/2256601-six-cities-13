import { Card } from '../card/card';
import { OfferListItem } from '../../types/offer-list-item';
import { MouseEvent } from 'react';

type CardsListProps = {
  cardsList: OfferListItem[];
  pageClass: string;
  onOfferHover: (id: string | undefined) => void;
};

export function CardsList ({cardsList, pageClass, onOfferHover}: CardsListProps) {
  const offerEnterHandler = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    onOfferHover(evt.currentTarget.id);
  };

  const offerLeaveHandler = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    onOfferHover(undefined);
  };

  return (
    <>
      {cardsList.map((card) =>
        (
          <Card
            key={card.id}
            offer={card}
            pageClass={pageClass}
            onMouseEnterHover={offerEnterHandler}
            onMouseLeaveHover={offerLeaveHandler}
          />
        )
      )}
    </>
  );
}


