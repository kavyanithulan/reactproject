import { useReducer,useState } from "react";
import { initialState,CounterReducer } from "./CounterReducer";


const Counter = () => {
    const[state,dispatch] = useReducer(CounterReducer,initialState);
    const[inputValue,setInputValue] = useState(0);

    const handleIncrement =()=>{
        dispatch({type:"increment"});
    }
    const handleDecrement =()=>{
        dispatch({type:"decrement"});
    }
    const handleIncrementByValue =()=>{
        dispatch({type:"incrementbyamount",payload:Number(inputValue)});
        setInputValue(0);
    }
    const handleDecrementByValue =()=>{
        dispatch({type:"decrementbyamount",payload:+inputValue});
        setInputValue(0);
    }

    return(
        <div>
            <h1>Counter:{state.count} </h1>
           <button onClick={handleIncrement}>Increment</button>
           <button onClick={handleDecrement}>Decrement</button>
            <div>
                <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
                <button onClick={handleIncrementByValue}>IncrementByvalue</button>
                <button onClick={handleDecrementByValue}>IncrementByvalue</button>
            </div>
        </div>
    );
}

export default Counter;