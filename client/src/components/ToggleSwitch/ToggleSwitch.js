import { useState } from 'react';
import { socket } from '../../constants/server';
import { useDispatch } from 'react-redux';
import { connectSocket } from '../../store/tickers';

import styled from 'styled-components';

const Toggle = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    background: #bada55;
  }

  &:checked + label::after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`;

const Label = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 95px;
  height: 45px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: absolute;
  top: 5rem;
  right: 5rem;

  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 35px;
    height: 35px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  &:active::after {
    width: 130px;
  }
`;

function ToggleSwitch() {
  const [isTickersOn, setIsTickersOn] = useState(false);
  const dispatch = useDispatch();

  const handleSwitch = () => {
    setIsTickersOn(prevState => !prevState);
    if (!isTickersOn) {
      socket.off('ticker');
    } else {
      socket.connect();
      dispatch(connectSocket());
    }
  };

  return (
    <>
      <Toggle
        type="checkbox"
        id="switch"
        onChange={handleSwitch}
        checked={isTickersOn}
      />
      <Label htmlFor="switch">Toggle</Label>
    </>
  );
}

export default ToggleSwitch;
