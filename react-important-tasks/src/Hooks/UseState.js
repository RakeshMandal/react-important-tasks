import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0);

    const increment =()=>{
        setCount(prev=>prev+1)
    };
    const decrement = ()=>{
        setCount(prev=>prev-1)
    }
  return (
    <div>
        <h3>useState</h3>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <p>Number is: {count}</p>
      
    </div>
  )
}

export default UseState
