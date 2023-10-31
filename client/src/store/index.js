import { configureStore } from '@reduxjs/toolkit';
import { quotesReducer } from './quotes';

const store = configureStore({ reducer: quotesReducer });

export default store;
