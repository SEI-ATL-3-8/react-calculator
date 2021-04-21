import './App.css';
import { useState } from 'react'

function App() {
  //       Getter         Setter       Starting State
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [totalNumber, setTotalNumber] = useState(0)
  const [buttonValue, setButtonValue] = useState('')

//Below function grabs button value from below onClick. Then used if/else if statement to determine what button what selected and if true commits below statement(parseInt turns string into integer)

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

      {/* Set button value thru onClick event - grabs value from 'value' - value works the same way when you add value to text input */}
      <div className = 'buttonContainer'>
     <input type = 'button' value = '+' onClick = {(e) => setButtonValue(e.target.value)} />
     <input type = 'button' value = '-' onClick = {(e) => setButtonValue(e.target.value)} />
     <input type = 'button' value = '*' onClick = {(e) => setButtonValue(e.target.value)} />
     <input type = 'button' value = '%' onClick = {(e) => setButtonValue(e.target.value)} />
      </div>

     <input type = 'select' name = 'secondNumber' value = {secondNumber} onChange = {(e) => setSecondNumber(e.target.value)}/>

     {/* Uses above fuction to determine what button was hit to do math problem - see above line 12-24 */}
     <h2>
       <button onClick = {submitTotal}> = </button>
        {totalNumber.toFixed(2)}</h2>
    </div>
  );
}

export default App;
