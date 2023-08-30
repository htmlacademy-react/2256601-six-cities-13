import { MAX_REVIEW_COUNT } from '../../const';
import { useAuth } from '../../hooks/use-auth';
import { Review } from '../../types/review';
import { getReviewWord } from '../../utils';
import { ReviewsForm } from '../review-form/review-form';
import { ReviewItem } from '../review-item/review-item';

type ReviewsListProps = {
  reviews: Review[];
}

export function ReviewsList ({reviews}: ReviewsListProps) {
  const isAuthorized = useAuth();

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        {getReviewWord(reviews.length)} · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {
          reviews.slice(0, MAX_REVIEW_COUNT).map ((review) => <ReviewItem review={review} key={review.id}/>)
        }
      </ul>
      {isAuthorized && <ReviewsForm/>}
    </section>
  );
}
