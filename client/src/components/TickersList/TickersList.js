import { useSelector } from 'react-redux';
import TickerItem from '../TickerItem/TickerItem';
import styled from 'styled-components';

const StyledList = styled.ul`
  max-width: 800px;
  margin-inline: auto;
`;

function TickersList() {
  const tickers = useSelector(state => state.tickers);

  return (
    <StyledList>
      {tickers.map((ticker, index) => (
        <TickerItem data={ticker} key={index} />
      ))}
    </StyledList>
  );
}

export default TickersList;
