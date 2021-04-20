import { useState } from 'react';
import './App.css';

function App() {

  const [firstBox, setFirstBox] = useState("")
  const [secondBox, setSecondBox] = useState("")
  const [final, setFinal] = useState(0)
  const [symbol, setSymbol] = useState("")
  const [color, setColor] = useState('red')

  const handleSubmit = (e) =>{
    e.preventDefault()
    
      if(symbol === "+" ){
        setFinal (parseInt(firstBox) + parseInt(secondBox))
      }else if(symbol === "-" ){
        setFinal (parseInt(firstBox) - parseInt(secondBox))
      }else if(symbol === "/" ){
        setFinal (parseInt(firstBox) / parseInt(secondBox))
      }else if(symbol === "*" ){
        setFinal (parseInt(firstBox) * parseInt(secondBox))
      }
  }
  return (
    <div className="App">
      
      <form className = "form" onSubmit = {handleSubmit}>

        <input type ="number" name = "firstBox" value = {firstBox}
        onChange = {(e) => {setFirstBox (e.target.value)}}/>

        <button type = "button" onClick = {() =>{setSymbol('+')}}>+</button>
        <button type = "button" onClick = {() =>{setSymbol('-')}}>-</button>
        <button type = "button" onClick = {() =>{setSymbol('/')}}>/</button>
        <button type = "button" onClick = {() =>{setSymbol('*')}}>*</button>

        <input type ="number" name = "secondBox" value = {secondBox}
        onChange = {(e) => {setSecondBox (e.target.value)}}/>

        <input type = "submit" value = "="/>
        
        <div> {final}</div>
      </form>

    </div>
  );
}

export default App;
