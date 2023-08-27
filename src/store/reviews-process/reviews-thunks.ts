import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';
import { Review } from '../../types/review';

type ReviewData = {
  comment: string;
  rating: number;
}

export const fetchReviews = createAsyncThunk<Review[], Review['id'], ThunkAPI> (
  `${NameSpace.Reviews}/fetch`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  }
);

export const postReview = createAsyncThunk<ReviewData, {
  reviewData: ReviewData;
  offerId: Review['id'];
}, ThunkAPI>(
  `${NameSpace.Reviews}/post`,
  async ({reviewData, offerId}, {extra: api}) => {
    const {data} = await api.post<ReviewData>(`${APIRoute.Reviews}/${offerId}`, reviewData);
    return data;
  }
);

