import React, { useEffect } from 'react';
import { socket } from '../../constants/server';
import { connectSocket } from '../../store/tickers';
import { useDispatch, useSelector } from 'react-redux';

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

const Loading = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
`;

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading);

  useEffect(() => {
    socket.emit('start');
    dispatch(connectSocket());

    return () => {
      socket.removeAllListeners('ticker');
    };
  }, [dispatch]);

  if (isLoading) return <Loading>Loading...</Loading>;

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
