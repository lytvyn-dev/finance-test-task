import { screen, render } from '@testing-library/react';
import TickersList from './TickersList';
import { Provider } from 'react-redux';
import store from '../../store';

describe('TickersList component', () => {
  it('TickersList renders', () => {
    render(
      <Provider store={store}>
        <TickersList />
      </Provider>,
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
