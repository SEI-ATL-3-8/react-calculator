import './App.css';
import { useState } from 'react'

// global array to keep track of calculation "run"
let calculation = []

const Stretch = () => {

    const [number, setNumber] = useState(0)

    // state to keep track of second most recent operator
    const [operator, setOperator] = useState(null)

    // state to keep track of most recent operator
    const [math, setMath] = useState(null)

    // assigns current number state
    const onChangeNumField = (e) => {
        setNumber(parseFloat(e.target.value))
    }

    // callback to calculate current pair of numbers based on most recent operator state before the most recently pressed operator's calculation
    const flexCalc = (operatorState) => {
        if ( calculation.length === 2 && operatorState === 'add' ) {
            setNumber(calculation[0] + calculation[1])
            calculation.push(calculation[0] + calculation[1])
            calculation.shift()
            calculation.shift()
        } else if ( calculation.length === 2 && operatorState === 'subtract' ) {
            setNumber(calculation[0] - calculation[1])
            calculation.push(calculation[0] - calculation[1])
            calculation.shift()
            calculation.shift()           
        } else if ( calculation.length === 2 && operatorState === 'multiply' ) {
            setNumber(calculation[0] * calculation[1])
            calculation.push(calculation[0] * calculation[1])
            calculation.shift()
            calculation.shift()
        } else if ( calculation.length === 2 && operatorState === 'divide' ) {
            setNumber(calculation[0] / calculation[1])
            calculation.push(calculation[0] / calculation[1])
            calculation.shift()
            calculation.shift()
        }
    }

    // callback to calculate current pair of numbers based on most recently pressed operator's calculation
    const buttonCalc = (mathType, operatorType) => {
        if ( calculation.length === 2 ) {
            setNumber(parseFloat(`${calculation[0]} ${mathType} ${calculation[1]}`))
            calculation.push(parseFloat(`${calculation[0]} ${mathType} ${calculation[1]}`))
            calculation.shift()
            calculation.shift()
        } else {
            setOperator(operatorType)
        }
    }

    // connected to add button, runs callback first before proceeding
    const addCalc = () => {
        setMath('+')
        calculation.push(number)
        if ( operator !== null ) {
            flexCalc(operator)
        }
        buttonCalc(math, 'add')
    }

    // connected to subtract button, runs callback first before proceeding
    const subtractCalc = () => {
        setMath('-')
        calculation.push(number)
        if ( operator !== null ) {
            flexCalc(operator)
        }
        buttonCalc(math, 'subtract')
    }

    // connected to multiply button, runs callback first before proceeding
    const multiplyCalc = () => {
        setMath('*')
        calculation.push(number)
        if ( operator !== null ) {
            flexCalc(operator)
        }
        buttonCalc(math, 'multiply')
    }

    // connected to divide button, runs callback first before proceeding
    const divideCalc = () => {
        setMath('/')
        calculation.push(number)
        if ( operator !== null ) {
            flexCalc(operator)
        }
        buttonCalc(math, 'divide')
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
        setOperator(null)
        setMath(null)
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