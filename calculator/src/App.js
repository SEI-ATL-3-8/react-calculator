import {useState} from 'react'
import './App.css';

function App() {
  const [operation, setOperation] = useState("");
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [result, setResult] = useState("");

  const calculate = (event) => {
    event.preventDefault();
    if(operation=='+'){
      setResult(parseInt(firstNum) + parseInt(secondNum))
    }else if(operation=='-'){
      setResult(parseInt(firstNum)-parseInt(secondNum))
    }else if (operation=='*'){
      setResult(parseInt(firstNum)*parseInt(secondNum))
    }else if (operation=='/'){
      setResult(parseInt(firstNum)/parseInt(secondNum))
    }
  }

  return (
    <div className="App">

      
      <div id="input_box">
        <input id="num1" type="number" placeholder="first number" value={firstNum} onChange={(event) => setFirstNum(event.target.value)}></input>
        <input id="num2" type="number" placeholder="second number" value={secondNum} onChange={(event) => setSecondNum(event.target.value)}></input>
      </div>

      <div id="button_box">
        <button id="add" class="buttons" onClick={() => setOperation('+')}>+</button>
        <button id="subtract" class="buttons" onClick={() => setOperation('-')}>-</button>
        <button id="multiply" class="buttons" onClick={() => setOperation('*')}>*</button>
        <button id="divide" class="buttons" onClick={() => setOperation('/')}>/</button>
        <button id="equals" class="buttons" onClick={calculate}>=</button>
      </div>
    

      <div id="results">{result}</div>
    </div>
  );
}

export default App;
