import './App.css';
import { useState } from 'react'
function App() {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [result, setResult] = useState(0)
  const [operation, setOperation] = useState('addition')

  const handleOperation = () => {
    switch (operation) {
      case 'substraction':
        setResult(number1 - number2)
        break;
      case 'multiplication':
        setResult(number1 * number2)
        break;
      case 'division':
        setResult(number1 / number2)
        break;
      default:
        setResult(number1 + number2)
        break;

    }
  }
  return (
    <div className="App">
      <input type="text" name="number1" onChange={(e) => setNumber1(parseInt(e.target.value))} />
      <button onClick={() => setOperation('addition')}>+</button>
      <button onClick={() => setOperation('substraction')}>-</button>
      <button onClick={() => setOperation('multiplication')}>*</button>
      <button onClick={() => setOperation('division')}>/</button>
      <input type="text" name="number2" onChange={(e) => setNumber2(parseInt(e.target.value))} />
      <button onClick={handleOperation}>=</button>
      <span>{result ? result : null}</span>
    </div>
  );
}

export default App;
