import './App.css';
import { useState } from 'react' 

function App() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [operation, setOperation] = useState("")
  const [total, setTotal] = useState(0)

  const calculateTotal = (e) => {
    e.preventDefault()
      if(operation === '+'){
        setTotal(parseInt(firstNumber) + parseInt(secondNumber))
      }else if(operation === '-'){
        setTotal(parseInt(firstNumber) - parseInt(secondNumber))
      }else if(operation === '*'){
        setTotal(parseInt(firstNumber) * parseInt(secondNumber))
      }else if(operation === '/'){
        setTotal(parseInt(firstNumber) / parseInt(secondNumber))
      }
  }

  return (
    <div className="App">

      <form className='form'>

        <input type ='number' name = 'firstNumber' placeholder = 'First Number' value = {firstNumber} onChange = {(e) => setFirstNumber(e.target.value)}/>

        <div className = 'operation-container'>
          <input type = 'button' value = '+' onClick={(e) => setOperation(e.target.value)} />
          <input type = 'button' value = '-' onClick={(e) => setOperation(e.target.value)} />
          <input type = 'button' value = '*' onClick={(e) => setOperation(e.target.value)} />
          <input type = 'button' value = '/' onClick={(e) => setOperation(e.target.value)} />
        </div> 

        <input type ='number' name = 'SecondNumber' placeholder = 'Second Number' value = {secondNumber} onChange = {(e) => setSecondNumber(e.target.value)}/>
        <div> 
          <input type = 'button' value = '=' onClick={calculateTotal} />
        </div>
        <div>
          <h3>{total}</h3> 
        </div>
        </form>
    </div>
  );
}

export default App;
