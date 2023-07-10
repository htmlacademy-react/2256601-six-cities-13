type AppProps = {
  cardCount: number;
}

import MainPage from '../../pages/main-page/main-page';

function App({cardCount}: AppProps): JSX.Element {
  return (
    <MainPage cardCount={cardCount}/>
  );
}

export {App};
