import { Card } from '../card/card';
import { OffersList } from '../../types/offers-list';
import { PageClass } from '../../const';

type CardsListProps = {
  cardsList: OffersList[];
  page: PageClass;
};

export function CardsList ({cardsList, page}: CardsListProps) {
  return cardsList.map((card) => <Card key={card.id} offer={card} page={page} />);
}


