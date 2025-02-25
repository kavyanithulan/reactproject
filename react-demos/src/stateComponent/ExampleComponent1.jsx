import { useEffect, useState } from "react"

const ExampleComponent1 = () => {
    const [name,setName]=useState(()=>{
        const savedName = localStorage.getItem('name');
        return savedName?savedName:'';
    });
    const handleNameChange=(event)=>{
        setName(event.target.value);
    };
    const handleClear=()=>{
        setName("");
    }
    useEffect(()=>{
        localStorage.setItem('name',JSON.stringify(name));
    },[name]);
  return (
    <div>ExampleComponent1
        <h1>Your name: {name}</h1>
        <input type="text" value={name} placeholder="Enter your name" onChange={handleNameChange}></input>
        <button onClick={handleClear}>Clear name</button>
    </div>
  )
}

export default ExampleComponent1