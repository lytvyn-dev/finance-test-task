import { render, screen } from '@testing-library/react';
import TickerItem from './TickerItem';

const data = {
  ticker: 'AAPL',
  exchange: 'NASDAQ',
  price: 279.29,
  change: 64.52,
  change_percent: 0.84,
  dividend: 0.56,
  yield: 1.34,
  last_trade_time: '2021-04-30T11:53:21.000Z',
};

describe('TickerItem component', () => {
  it('TickerItem renders', () => {
    render(<TickerItem data={data} />);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it('TickerItem renders without data', () => {
    render(<TickerItem data={{}} />);
    expect(screen.queryByRole('listitem')).toBeNull();
  });
});
