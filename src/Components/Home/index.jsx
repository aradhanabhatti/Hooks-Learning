import React,{useEffect, useState} from 'react'

const index = () => {
    const[counter,setCounter]=useState(0)
    let a=0;
    useEffect(
        ()=>
        {
            console.log(a,"a<><><");
        },[counter]
    )

  return (
    <div>
      <span>Counter: {counter}</span>
      <div>
        <button onClick={()=>
        setCounter(counter+1)}>+++</button>
      </div>
      <span>Normal: {a}</span>
      <div>
        <button onClick={()=>
        setCounter(counter+1)}>+++</button>
      </div>
    
    </div>
  )
}

export default index
