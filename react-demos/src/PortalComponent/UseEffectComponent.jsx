import { useEffect, useState } from "react"


const UseEffectComponent = () => {
    const[value,setValue]=useState(0);

    useEffect(()=>{
        console.log('use effect called');
        document.title=`increment ${value}`;
    },[value]);
  return (
    <div>
        
    <h1>{value}</h1>
    <button onClick={()=>{setValue(value+1)}}>click</button>
    </div>
  )
}

export default UseEffectComponent