import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { offersMock } from './mocks/offers-mock';
import { offersObjectMock } from './mocks/offers-object-mock';
import { reviewsMock } from './mocks/reviews-mock';
import { CITY } from './mocks/city';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offersList={offersMock} offersCardList={offersObjectMock} reviews={reviewsMock} city={CITY}/>
    </Provider>
  </React.StrictMode>
);
