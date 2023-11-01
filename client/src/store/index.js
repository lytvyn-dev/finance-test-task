import { configureStore } from '@reduxjs/toolkit';
import { tickersReducer } from './tickers';

const store = configureStore({ reducer: tickersReducer });

export default store;
