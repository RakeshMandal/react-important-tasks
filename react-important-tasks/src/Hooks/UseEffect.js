import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [name,setName] = useState([]);

    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    async function getData() {
      const data = await fetch(API_URL)
      let json = await data.json()
      setName(json.name)
    }

    useEffect(()=>{
      getData()
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
