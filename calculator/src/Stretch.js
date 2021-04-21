import './App.css';
import { useState } from 'react'

let calculation = []

const Stretch = () => {

    const [number, setNumber] = useState(0)
    const [operator, setOperator] = useState(null)



    const onChangeNumField = (e) => {
        setNumber(parseInt(e.target.value))
    }

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

    const finalCalc = () => {
        calculation.push(number)
        if ( operator !== null ) {
            flexCalc(operator)
        }
    }

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

    const clearField = () => {
        setNumber(0)
    }

    return (
        <div className="App">
            <div className="header">
                <h1>Calculator</h1>
                
                
            </div>
            <div className="calculator-area">
                <input type="number" name="number" value={number} onChange={onChangeNumField} />
                <div className="calculator-buttons">
                    <button className="btn-calc" onClick={addCalc}>+</button>
                    <button className="btn-calc" onClick={subtractCalc}>-</button>
                    <button className="btn-calc" onClick={multiplyCalc}>x</button>
                    <button className="btn-calc" onClick={divideCalc}>/</button>
                    <button className="btn-calc" onClick={clearField}>AC</button>
                    <button className="btn-calc" onClick={finalCalc}>=</button>
                    
              
                </div>

            </div>
            

        </div>
            
    )
}





export default Stretch