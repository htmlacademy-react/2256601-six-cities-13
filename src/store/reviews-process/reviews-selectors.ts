import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Review } from '../../types/review';

export const getReviews = (state: State): Review[] => state[NameSpace.Reviews].reviews;

export const getReviewsLoadStatus = (state: State): boolean => state[NameSpace.Reviews].isReviewsLoading;

export const getCommentPostStatus = (state: State): boolean => state[NameSpace.Reviews].isCommentPosting;


