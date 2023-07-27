import { Card } from '../card/card';
import { OfferListItem } from '../../types/offer-list-item';

type CardsListProps = {
  cardsList: OfferListItem[];
  pageClass: string;
};

export function CardsList ({cardsList, pageClass}: CardsListProps) {
  return (
    <>
      {cardsList.map((card) => <Card key={card.id} offer={card} pageClass={pageClass}/>)}
    </>
  );
}


