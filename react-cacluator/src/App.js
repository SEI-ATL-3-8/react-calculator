import './App.css';
import  {useState} from 'react'

function App() {
  const [first, setFirst] = useState([])
  const [second, setSecond] = useState([])


  const [number, setNumber] = useState()

  // console.log(first, second)




  return (
    <div className="App">
      <div>
        <h1>Mini Calculator</h1>
      </div>
      <div className="inputFields">
        <form>
          <input type="number" name="first" value={first} onChange={(e)=>setFirst(e.target.value)} />
          <input type="number" name="second" value={second} onChange={(e)=>setSecond(e.target.value)} />
        </form>
      </div>

      <div className="buttons">
        <button onClick={()=> { setNumber(parseInt(first)+parseInt(second)) }}>+</button>
        <button onClick={()=> { setNumber(parseInt(first)-parseInt(second)) }}>-</button>
        <button onClick={()=> { setNumber(parseInt(first)*parseInt(second)) }}>*</button>
        <button onClick={()=> { setNumber(parseInt(first)/parseInt(second)) }}>%</button>
      </div>

      <div><h1>={number}</h1></div>  
    </div>
  );
}

export default App;
