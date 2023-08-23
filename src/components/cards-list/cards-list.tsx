import { Card } from '../card/card';
import { OfferListItem } from '../../types/offer-list-item';
import { MouseEvent, memo, useCallback } from 'react';

type CardsListProps = {
  cardsList: OfferListItem[];
  pageClass: string;
  onOfferHover?: (id: string | undefined) => void;
};

function CardsListComponent ({cardsList, pageClass, onOfferHover}: CardsListProps) {
  const offerEnterHandler = useCallback((evt: MouseEvent<HTMLLIElement>) => {
    if (onOfferHover === undefined) {
      return;
    }
    evt.preventDefault();
    onOfferHover(evt.currentTarget.id);
  }, [onOfferHover]);

  const offerLeaveHandler = useCallback((evt: MouseEvent<HTMLLIElement>) => {
    if (onOfferHover === undefined) {
      return;
    }
    evt.preventDefault();
    onOfferHover(undefined);
  }, [onOfferHover]);

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

export const CardsList = memo(CardsListComponent);
