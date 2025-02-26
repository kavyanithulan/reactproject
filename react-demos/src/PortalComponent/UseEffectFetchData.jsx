import  { useEffect, useState } from 'react'

const UseEffectFetchData = () => {
    const[todoData,setTodoData]=useState([]);
    useEffect(()=>{
        async function getTodoData() {
            const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await resp.json();
            console.log("use effect called");
            console.log('use effect data',data);
            if(data && data.length>0){
            setTodoData(data);
            }
       }
       getTodoData();
    },[]);
  return (
    <div>Todo List: 
        
        {
            todoData.map(todo=>(
                <ul key={todo.id}>
                    <li>id: {todo.id}</li>
                    <li>title: {todo.title}</li>
                    <li>completed: {todo.completed}</li>

                </ul>
            ))
        }
    </div>
  )
}

export default UseEffectFetchData