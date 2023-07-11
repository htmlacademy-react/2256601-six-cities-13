import { MainPage } from '../../pages/main-page/main-page';
type AppProps = {
  cardCount: number;
}

export function App({cardCount}: AppProps): JSX.Element {
  return (
    <MainPage cardCount={cardCount}/>
  );
}

