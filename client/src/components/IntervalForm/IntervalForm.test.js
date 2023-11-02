import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { socket } from '../../constants/server';
import IntervalForm from './IntervalForm';

const handleInterval = jest.fn((eventName, value) => {
  socket.emit(eventName, value);
});

jest.mock('../../constants/server', () => ({
  socket: {
    emit: jest.fn(),
  },
}));

describe('IntervalForm component', () => {
  it('IntervalForm renders', () => {
    render(<IntervalForm />);

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('IntervalForm input accepts value', () => {
    render(<IntervalForm />);
    const input = screen.getByRole('spinbutton');

    userEvent.type(input, '5000');
    expect(input.value).toBe('5000');
  });

  it('IntervalForm calls function on button click', () => {
    render(<IntervalForm handleInterval={handleInterval} />);

    const button = screen.getByRole('button');
    const input = screen.getByRole('spinbutton');

    userEvent.type(input, '5000');
    userEvent.click(button);

    expect(socket.emit).toHaveBeenCalledWith('changeInterval', '5000');
  });
});
