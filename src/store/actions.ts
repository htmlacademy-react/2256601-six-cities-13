import { createAction } from '@reduxjs/toolkit';
import { AppRouteValue} from '../const';

export const redirectToRoute = createAction('redirectToRoute', (route: AppRouteValue | string) => ({payload: route}));

