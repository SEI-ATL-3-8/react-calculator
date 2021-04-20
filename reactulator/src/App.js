import { useState } from 'react'
import './App.css';

function App() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [answer, setAnswer] = useState()

  const addition = () => {
    setAnswer(firstNumber + secondNumber);
  }
  const subtraction = () => {
    setAnswer(firstNumber - secondNumber)
  }
  const multiplication = () => {
    setAnswer(firstNumber * secondNumber)
  }
  const division = () => {
    setAnswer(firstNumber / secondNumber)
  }
  return (
    <div className="App">
      <h1>Reactulator</h1>
      <form>
        <input type="number" name="firstNumber" value={firstNumber} onChange={(e) => setFirstNumber(+e.target.value)} />
        <input type="number" name="secondNumber" value={secondNumber} onChange={(e) => setSecondNumber(+e.target.value)} />
      </form>
      <span className="buttons">
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>
        <button onClick={multiplication}>*</button>
        <button onClick={division}>/</button>
      </span>
      <h1>=</h1>
      <div className="answer">

        
        <h2>{answer}</h2>

      </div>
    </div >

  );
}

export default App;
