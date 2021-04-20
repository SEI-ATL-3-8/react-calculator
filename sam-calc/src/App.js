import './App.css';
import { useState } from 'react'

function App() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [totalNumber, setTotalNumber] = useState(0)


  return (
    <div className="App">
      <h1>Calculator</h1>
     <input type = 'text' name = 'firstNumber' value = {firstNumber} onChange = {(e) => setFirstNumber(e.target.value)}/>
     <input type = 'text' name = 'secondNumber' value = {secondNumber} onChange = {(e) => setSecondNumber(e.target.value)}/>
     <input type = 'submit' value = '+' />
     <input type = 'submit' value = '-' />
     <input type = 'submit' value = '*' />
     <input type = 'submit' value = '%' />
     <h2>{totalNumber}</h2>
    </div>
  );
}

export default App;
