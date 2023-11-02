import { screen, render } from '@testing-library/react';
import ToggleSwitch from './ToggleSwitch';
import store from '../../store';
import { Provider } from 'react-redux';

describe('ToggleSwitch component', () => {
  it('ToggleSwitch renders', () => {
    render(
      <Provider store={store}>
        <ToggleSwitch />
      </Provider>,
    );

    expect(screen.getByLabelText('Toggle')).toBeInTheDocument();
  });
});
