import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import App from './App';

describe('App component', () => {
  it('App renders when isLoading is false', () => {
    const customStore = {
      ...store,
      getState: () => ({ ...store.getState(), isLoading: false }),
    };

    render(
      <Provider store={customStore}>
        <App />
      </Provider>,
    );

    expect(screen.queryByText('Loading...')).toBeNull();
  });

  it('App renders "Loading..." when isLoading is true', () => {
    const customStore = {
      ...store,
      getState: () => ({ ...store.getState(), isLoading: true }),
    };

    render(
      <Provider store={customStore}>
        <App />
      </Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
