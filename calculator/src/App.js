import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [operator, setOperator] = useState('+')

  const calculateNumber = e => {
    const calculateElement = document.querySelector('h1').innerText

    e.preventDefault()
    switch(operator) {
      case '*':
        calculateElement = firstNumber * secondNumber
        break;
      case '+':
        calculateElement = parseInt(firstNumber) + parseInt(secondNumber)
        break;
      case '-':
        calculateElement = firstNumber - secondNumber
        break;
      case '%':
        calculateElement = firstNumber / secondNumber
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={calculateNumber}>
          <input type='number' name='firstNumber' value={firstNumber} placeholder='First Digit' onChange={e => setFirstNumber(e.target.value)} />
          <button type='button' value='*' onClick={() => { setOperator('*') }}>*</button>
          <button type='button' value='+' onClick={() => { setOperator('+') }}>+</button>
          <button type='button' value='-' onClick={() => { setOperator('-') }}>-</button>
          <button type='button' value='%' onClick={() => { setOperator('%') }}>%</button>
          <input type='number' name='secondNumber' value={secondNumber} placeholder='Second Digit' onChange={e => setSecondNumber(e.target.value)} />
          <input type='submit' value='Calculate' />
        </form>
        <h1></h1>
      </div>
    </div>
  );
}

export default App;
