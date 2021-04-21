import {useState} from 'react'
import './App.css';

function App() {

  const [numberOne, setNumberOne] = useState(0)
  const [numberTwo, setNumberTwo] = useState(0)
  const [result, setResult] = useState(null)

  const handelChange = (e) => {
    if(e.target.name === 'numberOne') {
      setNumberOne(e.target.value)
    } else setNumberTwo(e.target.value)
  }

  const Addition = (e) => {
    e.preventDefault()
    setResult(parseInt(numberOne) + parseInt(numberTwo))
  }

  const Subtract = (e) => {
    e.preventDefault()
    setResult(parseInt(numberOne) - parseInt(numberTwo))
  }

  const Multiply = (e) => {
    e.preventDefault()
    setResult(parseInt(numberOne) * parseInt(numberTwo))
  }

  const Divide = (e) => {
    e.preventDefault()
    setResult(parseInt(numberOne) / parseInt(numberTwo))
  }

  return (
    <div className="App">
      <div className="title">
        <h1>Crappy Calculator</h1>
      </div>
      <form className="calculator">
        <input type="text"  onChange={handelChange} name="numberOne" value={numberOne} />
        <input type="text"  onChange={handelChange} name="numberTwo" value={numberTwo} />
        <button onClick={Addition}>+</button>
        <button onClick={Subtract}>-</button>
        <button onClick={Multiply}>*</button>
        <button onClick={Divide}>%</button>
        <button>=</button>
      </form>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
