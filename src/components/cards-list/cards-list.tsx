import { Card } from '../card/card';
import { OffersList } from '../../types/offers-list';

type CardsListProps = {
  cardsList: OffersList[];
};

export function CardsList ({cardsList}: CardsListProps) {
  return cardsList.map((card) => <Card key={card.id} offer={card}/>);
}


