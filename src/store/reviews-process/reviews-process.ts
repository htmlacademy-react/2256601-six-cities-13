import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Review } from '../../types/review';

type ReviewsProcess = {
  reviews: Review[];
  isReviewsLoading: boolean;
  isCommentPosting: boolean;
};

const initialState: ReviewsProcess = {
  reviews: [],
  isReviewsLoading: false,
  isCommentPosting: false,
};

export const reviewsProcessSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    setReviews: (state, action: PayloadAction<Review[]>) => {
      state.reviews = action.payload;
    },
    setReviewsLoadStatus: (state, action: PayloadAction<boolean>) => {
      state.isReviewsLoading = action.payload;
    },
    setCommentPostStatus: (state, action: PayloadAction<boolean>) => {
      state.isCommentPosting = action.payload;
    },
  }
});

export const {setReviews, setReviewsLoadStatus, setCommentPostStatus} = reviewsProcessSlice.actions;
