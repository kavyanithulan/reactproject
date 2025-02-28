import { useRef } from "react";

const FocusInput = () => {
    const inputElement = useRef("hi");

    const focusInput = ()=>{
        inputElement.current.focus();
    }
  return (
    <div>FocusInput:
        <input type="text" ref={inputElement}></input>
        <button onClick={()=>{
            focusInput()
        }}>Focus</button>
    </div>
  )
}

export default FocusInput