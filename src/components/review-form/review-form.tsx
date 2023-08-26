import { useState, ChangeEvent, FormEvent } from 'react';
import { Star } from '../star/star';
import { MIN_COMMENT_LENGTH } from '../../const';
import { MAX_COMMENT_LENGTH } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postComment } from '../../store/api-actions';
import { getActiveId } from '../../store/offers-process/offers-selectors';
import { getCommentPostStatus } from '../../store/reviews-process/reviews-selectors';
import { getReviewsRatingMap } from '../../utils';

type ReviewsFormProps = {
  scrollToReviewsTitle: () => void;
}

export function ReviewsForm ({scrollToReviewsTitle}: ReviewsFormProps) {
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const offerId = useAppSelector(getActiveId);
  const isCommentPosting = useAppSelector(getCommentPostStatus);

  const resetForm = () => {
    setComment('');
    setRating('');
  };
  const textareaChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => setComment(evt.target.value);
  const inputChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => setRating(evt.target.value);

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    (async () => {
      if (offerId !== null) {
        await dispatch(postComment({
          id: offerId,
          comment: comment,
          rating: Number(rating),
        }));
        resetForm();
        scrollToReviewsTitle();
      }
    })();
  };

  const isValid =
    comment.length >= MIN_COMMENT_LENGTH &&
    comment.length <= MAX_COMMENT_LENGTH &&
    rating !== '' &&
    !isCommentPosting;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={submitHandler}
    >
      <label className="reviews__label form__label" htmlFor="review">
      Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {getReviewsRatingMap().map(([score, title]) =>
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
          {isCommentPosting ? 'Posting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
