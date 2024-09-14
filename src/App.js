import React, { useState } from 'react';
import './App.css';

function App() {
  const[count, setCount] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const sum = Number(number1) + Number(number2);
    setTotal(sum);
  }
  return (
    <div>
      <div>
      <h1> The value is : </h1>
      <button onClick={setCount }>INCREASE</button>
      <button onClick={setCount }>DECREASE</button>
      </div>
      <div>
        <h1>Let's perform some addition</h1>
        <input 
          type='number'
          value={number1}
          onChange={(e) => setNumber1(e.target.value)} 
        /> <br />
        <input 
          type='number'
          value={number2}
          onChange={(e) => setNumber2(e.target.value)} 
        /> <br />

        <button onClick={calculateTotal}>Add numbers</button>
        <p>Total: {total}</p>
      </div>
    </div>
  );
}

export default App;