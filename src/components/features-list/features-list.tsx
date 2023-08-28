import { capitalize, getAdultWord, getBedroomWord } from '../../utils';

type FeaturesListProps = {
  bedrooms: number;
  maxAdults: number;
  type: string;
}

export function FeaturesList ({bedrooms, maxAdults, type}: FeaturesListProps) {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">{capitalize(type)}</li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} {getBedroomWord(bedrooms)}
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} {getAdultWord(maxAdults)}
      </li>
    </ul>
  );
}
