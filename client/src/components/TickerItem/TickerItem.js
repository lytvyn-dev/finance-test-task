import styled from 'styled-components';
import { TICKER_NAMES } from '../../constants/ticker-names';
import { formatCurrency } from '../../utils/helpers';
import { useEffect, useRef, useState } from 'react';

const Ticker = styled.li`
  font-size: 1.8rem;
  display: grid;
  grid-template-columns: 0.7fr 2fr 1fr 1fr 1fr;
  border-top: 0.2px solid #fff;
  padding: 10px 10px;
  border-radius: 5px;
`;

const Logo = styled.p`
  text-align: center;
  border-radius: 5px;
  min-width: 70px;
  margin-right: 10px;
  color: #333;
  background-color: #fff;
`;

function TickerItem({ data }) {
  let colorRef = useRef('#fff');
  const [prevPrice, setPrevPrice] = useState(0);

  useEffect(() => {
    if (prevPrice !== null) {
      if (data.price > prevPrice) {
        colorRef.current = 'green';
      } else if (data.price < prevPrice) {
        colorRef.current = 'red';
      }
    }
    setPrevPrice(data.price);
  }, [data.price, prevPrice]);

  if (Object.keys(data).length === 0) return null;

  return (
    <Ticker>
      <Logo>{data.ticker}</Logo>
      <h3>{TICKER_NAMES[data.ticker]}</h3>
      <span style={{ color: colorRef.current }}>
        {formatCurrency(data.price)}
      </span>
      <span>{data.change_percent} %</span>
      <span>{data.dividend}</span>
    </Ticker>
  );
}

export default TickerItem;
