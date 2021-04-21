
import './App.css';
import {useState} from 'react'

function App() {

  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [resultNumber, setResultNumber] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submit')
    console.log(firstNumber, secondNumber, resultNumber)
  }
  
  return (
    <div className="App">

      <form onSubmit = {handleSubmit}>
        <input type="number" name="firstNumber" value={firstNumber}
         onChange={(e) => setFirstNumber(e.target.value)}/>

         <button onClick ={() => { setResultNumber(Number(firstNumber) + Number(secondNumber))}}>+</button>
         <button onClick ={() => { setResultNumber(Number(firstNumber) - Number(secondNumber))}}>-</button>
         <button onClick ={() => { setResultNumber(Number(firstNumber) * Number(secondNumber))}}>x</button>
         <button onClick ={() => { setResultNumber(Number(firstNumber) / Number(secondNumber))}}>/</button>

        <input type="number" name="secondNumber" value = {secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}/>
        <label for="resultNumber">Answer:</label>
        <input type="number" name="resultNumber" value = {resultNumber}/>       
      </form>
      
    </div>
  );
}

export default App;
