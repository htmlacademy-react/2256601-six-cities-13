import { REVIEW_DATE_ATTRIBUTE_FORMATE, REVIEW_DATE_FORMATE } from '../../const';
import { Review } from '../../types/review';
import { Rating } from '../rating/rating';

type ReviewItemProps = {
  review: Review;
}

export function ReviewItem({review}: ReviewItemProps) {
  const parentClass = 'reviews';
  const {user, rating, comment} = review;
  const date = new Date(review.date);
  const formattedDate = (new Intl.DateTimeFormat('en-US', REVIEW_DATE_FORMATE).format(date));
  const formattedAttributeDate = (new Intl.DateTimeFormat('en-US', REVIEW_DATE_ATTRIBUTE_FORMATE).format(date)).replace(/\//g, '-');

  return (
    <li className="reviews__item" key={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt={user.name}
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
        {user.isPro && <small className="reviews__user-status">Pro</small>}
      </div>
      <div className="reviews__info">
        <Rating
          parentClass={parentClass}
          rating={rating}
        />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={formattedAttributeDate}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
}
