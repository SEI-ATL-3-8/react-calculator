import './App.css';
import {useState} from 'react'

function App() {
  const [first, setFirst] = useState([])
  const [second, setSecond] = useState([])

  const [total, setTotal] = useState ()


  return (
    <div className="App">
        <h1>Calculator</h1>
        <div className = "inputForms">
        <form>
          <input type ="number" name="first" value= {first} onChange ={(e) => setFirst (e.target.value)} />
          <input type ="number" name="second" value={second} onChange={(e) => setSecond (e.target.value)} />
        </form>
        </div>


      <div className="buttons">
        <button onClick = {() => { setTotal (parseInt(first) + parseInt(second)) }}>+</button>
        <button onClick = {() => { setTotal (parseInt(first) - parseInt(second)) }}>-</button>
        <button onClick = {() => { setTotal (parseInt(first) * parseInt(second)) }}>*</button>
        <button onClick = {() => { setTotal (parseInt(first) / parseInt(second)) }}>%</button>

      </div>

      <div><p>={total}</p></div>

    </div>


  );
}

export default App;
