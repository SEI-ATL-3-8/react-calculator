import { useState } from 'react'
const Form = () => {
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [answer, setAnswer] = useState()
    const [op, setOp] = useState('addition')

    const opController = () => {
        switch (op) {
            case 'addition':
                setAnswer(firstNumber + secondNumber)
                break
            case 'subtract':
                setAnswer(firstNumber - secondNumber)
                break
            case 'multiplication':
                setAnswer(firstNumber * secondNumber)
                break
            case 'division':
                setAnswer(firstNumber / secondNumber)
                break
            default:
        }
    }
    return (
        < div className="form" >
            <form>
                <input type="number" name="firstNumber" value={firstNumber} onChange={(e) => setFirstNumber(+e.target.value)} />
                <input type="number" name="secondNumber" value={secondNumber} onChange={(e) => setSecondNumber(+e.target.value)} />
            </form>
            <span className="buttons">
                <button onClick={() => setOp('addition')}>+</button>
                <button onClick={() => setOp('subtraction')}>-</button>
                <button onClick={() => setOp('multiplication')}>*</button>
                <button onClick={() => setOp('division')}>/</button>
            </span>
            <button className="equal" onClick={opController}>=</button>
            <div className = "answer">
                <h1>{answer}</h1>
            </div>
        </div >
    )
}
export default Form