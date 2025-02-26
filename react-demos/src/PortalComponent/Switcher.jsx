import { useState } from "react"

const Switcher = () => {
    const[sw,setSw] = useState(false);
  return (
    <div>Switcher: 
        {sw?(
            <span>Dark</span>
        ):(<span>lite</span>)}
        <input type="text" key={sw?"dark":"light"}></input>
        <button onClick={()=>{
            setSw(s=>!s)
        }}>click</button>
    </div>
  )
}

export default Switcher