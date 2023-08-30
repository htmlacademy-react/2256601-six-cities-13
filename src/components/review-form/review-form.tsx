import { useState, ChangeEvent, FormEvent } from 'react';
import { MIN_COMMENT_LENGTH } from '../../const';
import { MAX_COMMENT_LENGTH } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReview } from '../../store/reviews-process/reviews-thunks';
import { getOfferId } from '../../store/offer-card-process/offer-card-selectors';
import { RatingForm } from '../rating-form/rating-form';

export function ReviewsForm () {
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const offerId = useAppSelector(getOfferId);

  const resetForm = () => {
    setComment('');
    setRating('');
  };
  const handleChangeTextarea = (evt: ChangeEvent<HTMLTextAreaElement>) => setComment(evt.target.value);
  const handleChangeInput = (evt: ChangeEvent<HTMLInputElement>) => setRating(evt.target.value);

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (offerId !== undefined) {
      dispatch(postReview({
        reviewData: {
          comment: comment,
          rating: Number(rating),
        },
        offerId: offerId,
      }));
      resetForm();
    }
  };

  const isValid =
    comment.length >= MIN_COMMENT_LENGTH &&
    comment.length <= MAX_COMMENT_LENGTH &&
    rating !== '';

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmitForm}
    >
      <label className="reviews__label form__label" htmlFor="review">
      Your review
      </label>
      <RatingForm rating={rating} onChangeInput={handleChangeInput}/>
      <textarea
        onChange={handleChangeTextarea}
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
        </button>
      </div>
    </form>
  );
}
