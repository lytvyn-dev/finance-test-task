import React, { useEffect } from 'react';
import { socket } from '../../constants/server';
import { quotesActions } from '../../store/quotes';
import { useDispatch } from 'react-redux';

import IntervalForm from '../IntervalForm/IntervalForm';
import TickersList from '../TickersList/TickersList';

import styled from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';

const Heading = styled.h1`
  text-align: center;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', response => {
      const res = Array.isArray(response) ? response : [response];
      dispatch(quotesActions.uploadQuoted(res));
    });

    return () => {
      socket.removeAllListeners('ticker');
    };
  }, [dispatch]);

  return (
    <div>
      <GlobalStyles />
      <Heading>Finance stream</Heading>
      <TickersList />
      <IntervalForm />
    </div>
  );
}

export default App;
