type PriceProps = {
  price: number;
  parentClass: string;
  divider?: string;
};

export function Price ({price, parentClass, divider}: PriceProps) {
  const wrapperClass = `${parentClass}__price`;
  const valueClass = `${parentClass}__price-value`;
  const textClass = `${parentClass}__price-text`;

  return (
    <div className={wrapperClass}>
      <b className={valueClass}>€{price}</b>
      <span className={textClass}>{divider}&nbsp;night</span>
    </div>
  );
}
