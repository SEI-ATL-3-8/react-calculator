import './App.css';
import { useState } from 'react'

function App() {
  const [firstNum, setFirstNum] = useState('')
  const [secondNum, setSecondNum] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('Make a Calculation')

  const handleEquals = () => {
    let answer = null
    if(operator === '+') {
      answer = parseInt(firstNum) + parseInt(secondNum)
    } else if(operator === '-') {
      answer = parseInt(firstNum) - parseInt(secondNum)
    } else if(operator === '*') {
      answer = parseInt(firstNum) * parseInt(secondNum)
    } else if(operator === '/') {
      answer = parseInt(firstNum) / parseInt(secondNum)  
    }
    setResult(answer.toFixed(2))
  }

  return (
    <div className="App">
      <div className="container">
        <div className="inputs">
          <input className="input num1"
            type="number"
            name="firstNum"
            placeholder="Num1"
            value={firstNum}
            onChange={(e) => setFirstNum(e.target.value)}
          />

          <select name="operation" className="input operation" 
            onChange={(e) => {setOperator(e.target.value)}}
          >
            <option value="null"></option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>

          <input className="input num2"
            type="number"
            name="secondNum"
            placeholder="Num2"
            value={secondNum}
            onChange={(e) => setSecondNum(e.target.value)}
          />
        </div>

        <button className="spacing" onClick={handleEquals}>=</button>

        <div className="spacing result">{result}</div>
      </div>
    </div>
  );
}

export default App;
