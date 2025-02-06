import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [name,setName] = useState([]);

    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    useEffect(()=>{
        fetch(API_URL)
        .then(data=>data.json())
        .then(item=>setName(item))
    },[]);

  return (
    <>
    <h3>UseEffect</h3>
    <div className='user-details'>
      {
        name.map((user,index)=>(
           <ul>
             <li key={index}>{user.name}</li>
           </ul>
        ))
      }
    </div>
    </>
  )
}

export default UseEffect;
