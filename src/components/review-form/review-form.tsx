import { RatingMap } from '../../const';
import { useState, ChangeEvent } from 'react';
import { Star } from '../star/star';

import { MIN_COMMENT_LENGTH } from '../../const';
import { MAX_COMMENT_LENGTH } from '../../const';

export function ReviewsForm () {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const textareaChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => setComment(evt.target.value);
  const inputChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => setRating(evt.target.value);
  const isValid =
    comment.length >= MIN_COMMENT_LENGTH &&
    comment.length <= MAX_COMMENT_LENGTH &&
    rating !== '';

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
      Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingMap).reverse().map(([score, title]) =>
          <Star rating={rating} score={score} onChangeStarHandler={inputChangeHandler} key={score} title={title}/>
        )}
      </div>
      <textarea
        onChange={textareaChangeHandler}
        value={comment}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">{MIN_COMMENT_LENGTH}</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
