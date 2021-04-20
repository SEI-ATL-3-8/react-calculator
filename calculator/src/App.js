import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [op, setOp] = useState('+');
  const [result, setResult] = useState('');
  
  function handleOp (e)
  {
    setOp(e.target.value);
  }
  
  function calculate ()
  {
    switch (op)
    {
      case '+':
      {
        setResult(Number(eval(`${num1} + ${num2}`)));
        break;
      }
      case '-':
      {
        setResult(Number(eval(`${num1} - ${num2}`)));
        break;
      }
      case '*':
      {
        setResult(Number(eval(`${num1} * ${num2}`)));
        break;
      }
      case '/':
      {
        setResult(Number(eval(`${num1} / ${num2}`)));
        break;
      }
    }
  }
  return (
    <div className="App">
      <div className="calculator">
        <h2 className="result">{result ? result : 0}</h2>
        <div className="buttons">
          <input type="number" value={num1} placeholder="Number" onChange={(e) => {setNum1(e.target.value)}}/>
          <input className="operation" type="button" value={'+'} onClick={handleOp}/>
          <input className="operation" type="button" value={'-'} onClick={handleOp}/>
          <input className="operation" type="button" value={'*'} onClick={handleOp}/>
          <input className="operation" type="button" value={'/'} onClick={handleOp}/>
          <input type="number" value={num2} placeholder="Number" onChange={(e) => {setNum2(e.target.value)}}/>
          <input className="equals" type="button" value="=" onClick={calculate}/>
        </div>
      </div>
    </div>
  );
}

export default App;
