// update function = A function passed as an argument to setState() usually
//                   ex. setYear(y => y + 1) == (arrow function)
//                   Allow for safe updates based on the previous state
//                   Used with multiple state updates and asynchronous function 
//                   Good practice to use updater function

import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const increment = () =>{
        // setCount(count+1);
        setCount(c => c+1)
        setCount(prevCount => prevCount + 1)
    }

    const decrease = () =>{
        setCount(count-1)
    }
    const reset = () =>{
        setCount(0)
    }

    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={increment}>+1</button>
            <button className="counter-button" onClick={reset}>reset</button>
            <button className="counter-button" onClick={decrease}>-1</button>

        </div>
    )

}

export default Counter