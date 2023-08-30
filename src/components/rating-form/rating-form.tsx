import { getReviewsRatingMap } from '../../utils';
import { RatingItem } from '../rating-item-form/rating-item-form';
import { ChangeEvent } from 'react';

type RatingFormProps = {
  rating: string;
  onChangeInput: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export function RatingForm ({rating, onChangeInput}: RatingFormProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {getReviewsRatingMap().map(([score, title]) =>
        <RatingItem rating={rating} score={score} onChangeInput={onChangeInput} key={score} title={title}/>
      )}
    </div>
  );
}
