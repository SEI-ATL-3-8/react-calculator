import {useState} from 'react';
import './App.css';

function App() {
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [result, setResult] = useState();

  const add = () => {
    setResult(first + second);
  }

  const minus = () => {
    setResult(first - second);
  }

  const times = () => {
    setResult(first * second);
  }

  const over = () => {
    setResult(first / second);
  }


  return (
    <div className = "App">

      <div className = 'inputs'>

      <input type = 'text' className = 'input' placeholder = 'first number' value = {first} onChange = {(e) => setFirst(Number(e.target.value))} />

      <input type = 'text' className = 'input' placeholder = 'second number' value = {second} onChange = {(e) => setSecond(Number(e.target.value))} />

      </div>
      <div className = 'buttons'>
      <button className = 'button' onClick = {add}>+</button>
      <button className = 'button' onClick = {minus}>-</button>
      <button className = 'button' onClick = {times}>x</button>
      <button className = 'button' onClick = {over}>÷</button>
      </div>
      <h3 className = 'result'>= {result}</h3>
    </div>
  );
}

export default App;