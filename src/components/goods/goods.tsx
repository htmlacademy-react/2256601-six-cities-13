type GoodsProps = {
  goods: string[];
}

export function Goods ({goods}: GoodsProps) {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What`s inside</h2>
      <ul className="offer__inside-list">
        {
          goods.map((good) => <li className="offer__inside-item" key={good}>{good}</li>)
        }
      </ul>
    </div>
  );
}
