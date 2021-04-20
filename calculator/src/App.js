import { useState } from 'react'

import './App.css';

function App() {
const [num, setNum] = useState(0)
const[firstNum, setFirstNum] = useState(0)
const[SecondNum, setSecondNum] = useState(0)


  return (
    <div className="App">
      <div>Calculator</div>
      <button onClick ={() => {setNum(parseInt(firstNum) + parseInt(SecondNum))}}>+</button>
      <button onClick={() => {setNum(parseInt(firstNum) - parseInt(SecondNum))}}>-</button>
      <button onClick={() => {setNum(parseInt(firstNum) * parseInt(SecondNum))}}>*</button>
      <button onClick={() => {setNum(parseInt(firstNum) / parseInt(SecondNum))}}>/</button>

      
      <form>
        <input type="number" name="firstNum" value={firstNum} onChange={(e) => setFirstNum(e.target.value)}/>
        <input type="number" name="SecondNum" value={SecondNum} onChange={(e) => setSecondNum(e.target.value)}/>
      </form>
      
      <div>{num}</div>
    </div>
  );
}

export default App;
