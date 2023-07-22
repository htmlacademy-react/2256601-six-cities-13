import { Card } from '../card/card';
import { OffersList } from '../../types/offers-list';

type CardsListProps = {
  cardsList: OffersList[];
  isMainPage: boolean;
};

export function CardsList ({cardsList, isMainPage}: CardsListProps) {
  return cardsList.map((card) => <Card key={card.id} offer={card} isMainPage={isMainPage} />);
}


