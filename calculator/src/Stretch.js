import './App.css';
import { useState } from 'react'

// global array to keep track of calculation "run"
let calculation = []

const Stretch = () => {

    const [number, setNumber] = useState(0)
    const [operator, setOperator] = useState(null)

    // assigns current number state
    const onChangeNumField = (e) => {
        setNumber(parseFloat(e.target.value))
    }

    // callback to calculate current pair of numbers based on most recent operator state
    const flexCalc = (math) => {
        if ( calculation.length === 2 && math === 'add' ) {
            setNumber(calculation[0] + calculation[1])
            calculation.push(calculation[0] + calculation[1])
            calculation.shift()
            calculation.shift()
        } else if ( calculation.length === 2 && math === 'subtract' ) {
            setNumber(calculation[0] - calculation[1])
            calculation.push(calculation[0] - calculation[1])
            calculation.shift()
            calculation.shift()           
        } else if ( calculation.length === 2 && math === 'multiply' ) {
            setNumber(calculation[0] * calculation[1])
            calculation.push(calculation[0] * calculation[1])
            calculation.shift()
            calculation.shift()
        } else if ( calculation.length === 2 && math === 'divide' ) {
            setNumber(calculation[0] / calculation[1])
            calculation.push(calculation[0] / calculation[1])
            calculation.shift()
            calculation.shift()
        }
    }

    // connected to add button, runs callback first before proceeding
    const addCalc = () => {
        calculation.push(number)
        if ( operator !== null ) {
            flexCalc(operator)
        }
        if ( calculation.length === 2 ) {
            setNumber(calculation[0] + calculation[1])
            calculation.push(calculation[0] + calculation[1])
            calculation.shift()
            calculation.shift()
        } else {
            console.log('calculation', calculation)
            setOperator('add')            
        }
    }

    // connected to subtract button, runs callback first before proceeding
    const subtractCalc = () => {
        calculation.push(number)
        if ( operator !== null ) {
            flexCalc(operator)
        }
        if ( calculation.length === 2 ) {
            setNumber(calculation[0] - calculation[1])
            calculation.push(calculation[0] - calculation[1])
            calculation.shift()
            calculation.shift()
        } else {
            console.log('calculation', calculation)
            setOperator('subtract')            
        }
    }

    // connected to multiply button, runs callback first before proceeding
    const multiplyCalc = () => {
        calculation.push(number)
        if ( operator !== null ) {
            flexCalc(operator)
        }
        if ( calculation.length === 2 ) {
            setNumber(calculation[0] * calculation[1])
            calculation.push(calculation[0] * calculation[1])
            calculation.shift()
            calculation.shift()
        } else {
            console.log('calculation', calculation)
            setOperator('multiply')
        }
    }

    // connected to divide button, runs callback first before proceeding
    const divideCalc = () => {
        calculation.push(number)
        if ( operator !== null ) {
            flexCalc(operator)
        }
        if ( calculation.length === 2 ) {
            setNumber(calculation[0] / calculation[1])
            calculation.push(calculation[0] / calculation[1])
            calculation.shift()
            calculation.shift()
        } else {
            console.log('calculation', calculation)
            setOperator('divide')
        }
    }

    // if the user wants to get the final result and stop the calculation "run"
    const equalCalc = () => {
        calculation.push(number)
        if ( operator !== null ) {
            flexCalc(operator)
        }
    }

    // if the user wants to clear the calculator's "memory" and start with fresh calculations
    const clearCalc = () => {
        setNumber(0)
        calculation.length = 0
    }

    return (
        <div className="App">
            <div className="header">
                <h1>Calculator</h1>
            </div>
            <div className="calculator-area">
                <input type="number" name="number" step="0.01" value={number} onChange={onChangeNumField} />
                <div className="calculator-buttons">
                    <button className="btn-calc" onClick={addCalc}>+</button>
                    <button className="btn-calc" onClick={subtractCalc}>-</button>
                    <button className="btn-calc" onClick={multiplyCalc}>x</button>
                    <button className="btn-calc" onClick={divideCalc}>/</button>
                    <button className="btn-calc" onClick={clearCalc}>AC</button>
                    <button className="btn-calc" onClick={equalCalc}>=</button>
                </div>
            </div>
        </div>    
    )
}



export default Stretch