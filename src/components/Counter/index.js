import React, { useState } from 'react';

import './style.css'

const Counter = () => {

  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const handleChangeValue = (e) => {
    setInputValue(e.target.value);
  }

  const addToCounter = () => {
    setCounterValue(parseInt(counterValue) + parseInt(inputValue));
  }

  const subtractFromCounter = () => {
    setCounterValue(parseInt(counterValue) - parseInt(inputValue));
  }

  return <div>
    <h3 data-testid="header">My Counter</h3>
    <h2 data-testid="counter">{counterValue}</h2>
    <button 
    onClick={subtractFromCounter}
    data-testid="subtract-btn">-</button>
    <input
      onChange={handleChangeValue}
      className="text-input" 
      type="number" 
      data-testid="input" 
      value={inputValue}/>
    <button
    onClick={addToCounter}
    data-testid="add-btn"
    >+</button>
  </div>
}

export default Counter;