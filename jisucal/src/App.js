import './App.css';
import {useState} from "react"


function App() {
  const [first, setFirst] =useState([])
  const [second, setSecond] =useState([])
  const [result, setResult] =useState(0)
  return (
    <div className="mainDiv">
      <h1>Calculator</h1>
      <div className="calDiv">
        <input type="text" name="fitst" value={first} placeholder="First Number" onChange={(e)=> setFirst(e.target.value)}/>
        <input type="text" name="second" value={second} placeholder="Second Number" onChange={(e)=> setSecond(e.target.value)}/>

        <button onClick={()=>{ setResult(parseInt(first)+parseInt(second))}}>+</button>
        <button onClick={()=>{ setResult(parseInt(first)-parseInt(second))}}>-</button>
        <button onClick={()=>{ setResult(parseInt(first)*parseInt(second))}}>*</button>
        <button onClick={()=>{ setResult(parseInt(first)/parseInt(second))}}>/</button>

        <div className="resultDiv">{result}</div>
      </div>
     
    </div>
  );
}

export default App;
