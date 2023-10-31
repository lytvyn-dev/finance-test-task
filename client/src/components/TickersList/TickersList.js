import { useSelector } from 'react-redux';
import TickerItem from '../TickerItem/TickerItem';
import styled from 'styled-components';

const StyledList = styled.ul`
  max-width: 800px;
  margin-inline: auto;
`;

function TickersList() {
  const quotes = useSelector(state => state.quotes);

  return (
    <StyledList>
      {quotes.map((quote, index) => (
        <TickerItem data={quote} key={index} />
      ))}
    </StyledList>
  );
}

export default TickersList;
