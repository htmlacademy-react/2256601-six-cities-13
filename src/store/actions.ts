import { createAction } from '@reduxjs/toolkit';
import { AppRoute} from '../const';

export const redirectToRoute = createAction('redirectToRoute', (route: AppRoute | string) => ({payload: route}));

