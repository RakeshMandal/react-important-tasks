import React, { useEffect, useState } from 'react';
import '../App.css';

const Timer = () => {
    const [time,setTime] = useState(0);
    const [status,setStatus] = useState(false);

    let interval;
    useEffect(()=>{
        if(status){
            interval = setInterval(() => {
                setTime(prev=>prev+1)
            }, 400);
        }
        return()=>{
            clearInterval(interval)
        }

    },[status])
  
    const start = ()=>{
        setStatus(true)
    };
    const stop = ()=>{
        setStatus(false)
    };
    const restart = ()=>{
        setTime(0)
        setStatus(true)
    }
  return (
    <div className='timer-container'>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={restart}>Re Start</button>
      <p style={{fontSize:"30px",fontWeight:"bold",margin:"0"}}>Timer : {time}</p>
    </div>
  )
}

export default Timer
