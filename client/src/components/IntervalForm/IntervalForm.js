import { useState } from 'react';
import { socket } from '../../constants/server';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button`
  color: #fff;
  background-color: black;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
`;

const Input = styled.input`
  padding-left: 5px;
  color: #333;
  min-width: 140px;
`;

function IntervalForm() {
  const [newInterval, setNewInterval] = useState('');

  const handleIntervalChange = e => {
    e.preventDefault();
    socket.emit('changeInterval', newInterval);
    setNewInterval('');
  };

  const changeInputHandler = e => {
    setNewInterval(e.target.value);
  };

  return (
    <StyledForm>
      <Input
        min={1000}
        max={20000}
        type="number"
        placeholder="Enter new interval"
        value={newInterval}
        onChange={changeInputHandler}
      />
      <Button onClick={handleIntervalChange}>Change</Button>
    </StyledForm>
  );
}

export default IntervalForm;
