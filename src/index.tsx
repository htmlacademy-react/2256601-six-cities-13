import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { offersMock } from './mocks/offers-mock';
import { offersObjectMock } from './mocks/offers-object-mock';
import { reviewsMock } from './mocks/reviews-mock';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersList={offersMock} offersCardList={offersObjectMock} reviews={reviewsMock}/>
  </React.StrictMode>
);
