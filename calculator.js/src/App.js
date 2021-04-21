import './App.css';
import {useState} from 'react'

function App() {
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)
  const [total, setTotal] = useState(firstNum + secondNum)
  const add = () => {setTotal(firstNum + secondNum)}  
  const subtract = () => {setTotal(firstNum - secondNum)} 
  const multiply = () => {setTotal(firstNum * secondNum)} 
  const divide = () => {setTotal(firstNum / secondNum)} 
  
  const equal = () => { 
  let submit = null
  if (total === 'add'){submit = setTotal(firstNum + secondNum) }
  else if (total === 'subtract'){submit = setTotal(firstNum - secondNum)} 
  else if (total === 'multiply'){submit = setTotal(firstNum * secondNum)}
  else if (total === 'divide'){submit = setTotal(firstNum / secondNum)}
}

  
const handleSubmit = (e) => {
e.preventDefault()
{ }

}
  
return (

    
<div className='container'>
<from onSubmit = {handleSubmit}>

<input type='number' name='firstNum' placeholder='0' onChange={(e) => setFirstNum(+e.target.value)}/> 

<input type='number' name='secondNum' placeholder='0' onChange={(e) => setSecondNum(+e.target.value)} />

<button onClick={equal} type='submit'>=</button> 

<h2>{total}</h2>
</from>

<div className='symbol'>
<button onClick={add} className='add'>+</button>
<button onClick={subtract} className='subtract'>-</button>
<button onClick={multiply} className='multiply'>x</button>
<button onClick={divide} className='divide'>/</button>
</div>
</div>
  );
}

export default App;
