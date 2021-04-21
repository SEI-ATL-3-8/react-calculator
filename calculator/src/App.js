import './App.css';
import { useState } from 'react'

function App() {

  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [answer, setAnswer] = useState(0)
  const [isAdd, setIsAdd] = useState(false)
  const [isSubtract, setIsSubtract] = useState(false)
  const [isMultiply, setIsMultiply] = useState(false)
  const [isDivide, setIsDivide] = useState(false)

  const calcAdd = () => {
    setAnswer(number1 + number2)
    resetCalcs()
  }

  const calcSubtract = () => {
    setAnswer(number1 - number2)
    resetCalcs()
  }

  const calcMultiply = () => {
    setAnswer(number1 * number2)
    resetCalcs()
  }

  const calcDivide = () => {
    setAnswer(number1 / number2)
    resetCalcs()
  }

  const resetCalcs = () => {
    setIsAdd(false)
    setIsSubtract(false)
    setIsMultiply(false)
    setIsDivide(false)
  }

  const clearFields = () => {
    setNumber1(0)
    setNumber2(0)
    setAnswer(0)
  }


  return (
    <div className="App">
      <div className="header">
          <h1>Calculator</h1>
          <button className="btn-clear" onClick={clearFields}>Clear Fields</button>
      </div>
      <div className="calculator-area">
          <input type="number" name="number1" value={number1} onChange={(e) => {setNumber1(parseInt(e.target.value))}} />
          <div className="calculator-buttons">
              <button className="btn-calc" onClick={() => {setIsAdd(true)}}>+</button>
              <button className="btn-calc" onClick={() => {setIsSubtract(true)}}>-</button>
              <button className="btn-calc" onClick={() => {setIsMultiply(true)}}>x</button>
              <button className="btn-calc" onClick={() => {setIsDivide(true)}}>/</button>
              
          </div>
          <input type="number" name="number2" value={number2} onChange={(e) => {setNumber2(parseInt(e.target.value))}} />

          { isAdd === false && isSubtract === false && isMultiply === false && isDivide === false ? <button>=</button> : null}

          { isAdd === true && <button onClick={calcAdd}>=</button> }
          { isSubtract === true && <button onClick={calcSubtract}>=</button> }
          { isMultiply === true && <button onClick={calcMultiply}>=</button> }
          { isDivide === true && <button onClick={calcDivide}>=</button> }

          <div className="answer-field">{answer}</div>

      </div>

    </div>
  );
}

export default App;
