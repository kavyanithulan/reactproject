import { useState } from "react"

const TodoList = () => {
    const[todoItem,setTodoItem]=useState([]);
    const[inputValue,setInputValue]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        setTodoItem([...todoItem,inputValue]);
        setInputValue("");
    }
    const handleChange=(event)=>{       
        setInputValue(event.target.value);
    }
  return (
    <div>
        <h1>TodoList:</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} placeholder="todo" onChange={handleChange}></input>
            <button type="submit">Add Todo Item</button>
        </form>
        
       <div>
      
        {todoItem.map(todo=>(            
                <li key={todo}>{todo}</li>            
        ))}</div> 
    </div>
  )
}

export default TodoList