import { useEffect, useState } from "react"

const CounterEffect = () => {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`Increment ${count}`;
    },[count]);
  return (
    <div>CounterEffect:
        <h4>{count}</h4>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}

export default CounterEffect;