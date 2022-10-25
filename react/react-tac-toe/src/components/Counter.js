import { useState } from 'react';

export default function Counter(props) {

    // const countState = useState(0)
    // console.log(countState)

    // array destructuring syntax
    let [count, setCount] = useState(0)
    let [number, setNumber] = useState(0)

    // setCount((prevState) => (prevState * 2)) 

    // setCount(count + 1)
    // <button onClick={() => setCount(count + 1)}>+</button>
    // <button onClick={() => setCount(count - 1)}>-</button>

    const handleIncrement = () => {
        setCount(count + parseInt(number))
        // setCount((prevState) => prevState + parseInt(number))
        // parseInt() converts string into a number
    }

    const handleDecrement = () => {
        setCount(count - parseInt(number))
    }

    const handleDivide = () => {
        setCount(count / parseInt(number))
    }

    const handleMultiply = () => {
        setCount(count * parseInt(number))
    }

    const handleChange = (e) => {
        console.log(e)
        setNumber(e.target.value)
    }

    return (
        <>
            <span>Current Count: {count}</span>
            <section>
                <input type="text" value={number} onChange={handleChange} /> <br/>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleMultiply}>*</button>
                <button onClick={handleDivide}>/</button>
            </section>
        </>
    )
}


/* 

create 2 more btns
one divides num by 2 using setCount func
one multiplies by 2


-----

use inputted number in your diff handlers (funcs)
to add, subtr, mult, div, a specified num
eg. if input 5 and hit + (0 + 5) we see 5

*/