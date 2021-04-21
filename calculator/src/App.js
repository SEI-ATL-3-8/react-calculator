
import './App.css';
import { useState } from 'react'

function App() {
 
  const [numberOne, setNumberOne] = useState('')
  const [numberTwo, setNumberTwo] = useState('')
  const [result, setResult] = useState('')

   const addition = () => {
     setResult(numberOne + numberTwo);
   }
   const subtract = () => {
     setResult(numberOne - numberTwo)
   }
   const multiplication = () => {
     setResult(numberOne * numberTwo)
   }
   const division = () => {
     setResult(numberOne / numberTwo)
   }

  

  return (
    <div className="App">
     
     <form>
     <input type="number" name="numberOne"
     value ={numberOne} onChange={(e) => setNumberOne(+e.target.value)}/>
    </form>
    <div className="grid">
      <button onClick={addition}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiplication}>x</button> 
      <button onClick={division}>/</button>
    </div>
    <form>
     <input type="number" name="numberTwo"
     value ={numberTwo} onChange={(e) => setNumberTwo(+e.target.value)}/>
    </form>
    <div className="grid">
      <span>=</span>
    </div>
    <div className="result">
    <span>{result}</span>
    </div>
     
    </div>
  );
}

export default App;
