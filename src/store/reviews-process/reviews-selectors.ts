import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { sortedReviewsByLatestDate } from '../../utils';

export const getReviews = (state: State) => state[NameSpace.Reviews].reviews;
export const getReviewsSortedByLatestDate = createSelector([getReviews], (reviews) => sortedReviewsByLatestDate(reviews));

/*

export const getReviewsLoadStatus = (state: State): boolean => state[NameSpace.Reviews].isReviewsLoading;

export const getCommentPostStatus = (state: State): boolean => state[NameSpace.Reviews].isCommentPosting;

*/
