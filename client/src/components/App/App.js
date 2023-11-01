import React, { useEffect } from 'react';
import { socket } from '../../constants/server';
import { tickersActions } from '../../store/tickers';
import { useDispatch } from 'react-redux';

import IntervalForm from '../IntervalForm/IntervalForm';
import TickersList from '../TickersList/TickersList';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

import styled from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';

const Layout = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', response => {
      const res = Array.isArray(response) ? response : [response];
      dispatch(tickersActions.uploadTickers(res));
    });

    return () => {
      socket.removeAllListeners('ticker');
    };
  }, [dispatch]);

  return (
    <Layout>
      <GlobalStyles />
      <ToggleSwitch />
      <TickersList />
      <IntervalForm />
    </Layout>
  );
}

export default App;
