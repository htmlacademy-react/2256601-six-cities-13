import { createSlice} from '@reduxjs/toolkit';
import { NameSpace, RequestStatusMap, RequestStatusValue } from '../../const';
import { Review } from '../../types/review';
import { fetchReviews, postReview } from './reviews-thunks';

type ReviewsProcess = {
  reviews: Review[];
  reviewsStatus: RequestStatusValue;
  postReviewStatus: RequestStatusValue;
};

const initialState: ReviewsProcess = {
  reviews: [],
  reviewsStatus: RequestStatusMap.Idle,
  postReviewStatus: RequestStatusMap.Idle,
};

export const reviewsProcessSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    clearReviews: (state) => {
      state.reviews = [];
      state.reviewsStatus = RequestStatusMap.Idle;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.reviewsStatus = RequestStatusMap.Success;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.reviewsStatus = RequestStatusMap.Pending;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviewsStatus = RequestStatusMap.Failed;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.postReviewStatus = RequestStatusMap.Success;
      })
      .addCase(postReview.pending, (state) => {
        state.postReviewStatus = RequestStatusMap.Pending;
      })
      .addCase(postReview.rejected, (state) => {
        state.postReviewStatus = RequestStatusMap.Failed;
      });
  }
});

export const {clearReviews} = reviewsProcessSlice.actions;
