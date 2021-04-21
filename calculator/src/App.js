import { useState } from 'react';
import './App.css';
import {numbers, symbols} from './data';

function App() {

  const entry = {
    firstValue: '',
    output: '',
    symbol: '',
  }

  const handleChange = e => {
      const { value, innerText, tagName } = e.target;
     
      let newOutput = tagName !== 'BUTTON' ? value : calc.output + innerText;
     
      setCalc({
        ...calc,
        output: newOutput
      });
      
  };


  const [calc, setCalc] = useState(entry);

  const calculate = (a, b, symbol) => {
    let numA = parseFloat(a);
    let numB = parseFloat(b);

    if (symbol === '+') {
      return numA + numB;
    }
    else if (symbol === '-') {
      return numA - numB;
    }

    else if (symbol === '/') {
      return numA / numB;
    }

    else if (symbol === '*') {
      return numA * numB;
    }
  }


  const handleSymbols = (e) => {
      const { innerText: symbol} = e.target;

      if (symbol === '=') { 
         if (calc.firstValue !== '' && calc.output !== '') {
            let answer = calculate(calc.firstValue, calc.output, calc.symbol);
            setCalc({
              ...calc,
              firstValue: '',
              output: answer,
              symbol: '',
            });
         }
      }

      else {
        if (calc.firstValue === '' || calc.output !== '') {
          setCalc({
            ...calc,
            firstValue: calc.output,
            output: '',
            symbol
          });
        }

   
      }
  }





  return (
    <div className="app">

      <div className="calculator">
        <input onChange={handleChange} type="number" value={calc.output} /> 
        <div className="calc-container">
        { 
          numbers.map(n => (
            <button onClick={handleChange} key={n}>{n}</button>
          ))
        }

        {
             symbols.map(s => (
              <button onClick={handleSymbols} key={s}>{s}</button>
            ))
        }

        </div>

      </div>
    
   


    </div>
  );
}

export default App;
