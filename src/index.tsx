import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { Setting } from './const';
import { offersMock } from './mocks/offers-mock';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cardCount={Setting.CardCount} offersList={offersMock}/>
  </React.StrictMode>
);
