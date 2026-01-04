
import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count+1);
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