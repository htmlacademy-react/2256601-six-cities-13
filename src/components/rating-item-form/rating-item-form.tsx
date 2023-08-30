import { ChangeEvent } from 'react';

export type RatingItemProps = {
  onChangeInput: (evt: ChangeEvent<HTMLInputElement>) => void;
  rating: string;
  score: string;
  title: string;
}

export function RatingItem ({onChangeInput, rating, score, title}: RatingItemProps) {
  return (
    <>
      <input
        onChange={onChangeInput}
        className="form__rating-input visually-hidden"
        name="rating"
        value={score}
        id={`${score}-stars`}
        type="radio"
        checked={rating === score}
      />
      <label
        htmlFor={`${score}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
}
