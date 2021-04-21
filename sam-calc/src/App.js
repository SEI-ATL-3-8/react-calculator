import './App.css';
import { useState } from 'react'

function App() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [totalNumber, setTotalNumber] = useState(0)
  const [buttonValue, setButtonValue] = useState('')

const submitTotal = () => {
  if (buttonValue === '+' ) {
    setTotalNumber(parseInt(firstNumber) + parseInt(secondNumber))
  } else if (buttonValue === '-') {
    setTotalNumber(parseInt(firstNumber) - parseInt(secondNumber))
  } else if (buttonValue === '*') {
    setTotalNumber(parseInt(firstNumber) * parseInt(secondNumber))
  } else if (buttonValue === '%') {
    setTotalNumber(parseInt(firstNumber) / parseInt(secondNumber))
  }
    // console.log(totalNumber);
    // console.log(totalNumber);
}

  return (
    <div className="App">
      <h1>Calculator</h1>
     <input type = 'select' name = 'firstNumber' value = {firstNumber} onChange = {(e) => setFirstNumber(e.target.value)}/>

     <input type = 'button' value = '+' onClick = {(e) => setButtonValue(e.target.value)} />
     <input type = 'button' value = '-' onClick = {(e) => setButtonValue(e.target.value)} />
     <input type = 'button' value = '*' onClick = {(e) => setButtonValue(e.target.value)} />
     <input type = 'button' value = '%' onClick = {(e) => setButtonValue(e.target.value)} />

     <input type = 'select' name = 'secondNumber' value = {secondNumber} onChange = {(e) => setSecondNumber(e.target.value)}/>
     <h2>
       <button onClick = {submitTotal}>=</button>
        {totalNumber.toFixed(2)}</h2>
    </div>
  );
}

export default App;
