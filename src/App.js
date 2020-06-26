import React, { useState, useEffect, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';

const GIANT_NUMBER = 50000
const generateRandomNames = () => {
  return Array.from(Array(GIANT_NUMBER)).map(() => Math.ceil(Math.random() * 10))
}

const App = () => {
  const [ name, setName ] = useState('');
  const numbers = useMemo(() => () => generateRandomNames() , [])

  const numbersJSX = numbers.map((n) => <div style={{ padding: '10px',}}>{n}</div>)
  return (
    <div className="App">
      <form>
        <label for="name">Nombre: </label>
        <input name="name" id="name" value={name} onChange={(evt) => {
          setName(evt.target.value);
        }} />
      </form>
      <div className="flex-container"
           style={{
             display: 'flex',
             flexWrap: 'wrap'
           }}>
      { numbersJSX }
    </div>
    </div>
  );
}

export default App;
