import { ChangeEvent } from 'react';

export type StarProps = {
  onChangeStarHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  rating: string;
  star: number;
}

export function Star ({onChangeStarHandler, rating, star}: StarProps) {
  return (
    <>
      <input
        onChange={onChangeStarHandler}
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${star}-stars`}
        type="radio"
      />
      <label
        htmlFor={`${star}-stars`}
        className="reviews__rating-label form__rating-label"
        title="perfect"
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
}
