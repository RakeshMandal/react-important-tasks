import React, { useCallback, useState } from 'react'

const UseCallBack = () => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(1);
    const increment = useCallback(()=>{
        setCount(prev=>prev+count2)
    },[count2])
  return (
    <div>
        <h3>UseCallBack</h3>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <input type='number' value={count2} onChange={(e)=>setCount2(Number(e.target.value))}/>
      
    </div>
  )
}

export default UseCallBack
