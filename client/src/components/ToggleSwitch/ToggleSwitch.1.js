import { useState } from 'react';
import { socket } from '../../constants/server';
import { Toggle, Label } from './ToggleSwitch';

export function ToggleSwitch() {
  const [isTickersOn, setIsTickersOn] = useState(false);

  const handleSwitch = () => {
    setIsTickersOn(prevState => !prevState);
    if (!isTickersOn) {
      socket.disconnect();
    } else {
      socket.emit('start');
      socket.on('ticker');
    }
  };

  return (
    <>
      <Toggle type="checkbox" id="switch" checked={isTickersOn} />
      <Label onClick={handleSwitch} for="switch"></Label>
    </>
  );
}
