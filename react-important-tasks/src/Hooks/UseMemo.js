import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0);

    const ExpensiveCalcution = useMemo(()=>{
        return count*10;
    },[count])
  return (
    <div>
        <h3>UseMemo</h3>
        <p>Count: {count}</p>
        <p>ExpensiveCalcution: {ExpensiveCalcution}</p>
        <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}

export default UseMemo
