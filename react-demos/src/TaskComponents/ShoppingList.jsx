import { useState } from "react"


const ShoppingList = () => {
    const[shopItems,setShopItems]=useState([]);
    const[name,setName]=useState("");
    const[quantity,setQuantity]=useState(0);
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newItem = {
            name,quantity
        }
      
        console.log("oneitem",newItem);
        setShopItems((prevItems)=>[...prevItems,newItem]);
        console.log("shopitems",shopItems);
      
       // setOneItem([]);
        setName('');
        setQuantity(0);
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Add shopping item: </h1>
        <h3>name: </h3>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <h3>quantity: </h3>
        <input type="text" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}></input>
        <button type="submit">Add</button>
        </form>
        <h1>shopping data:</h1>
      <ul> {
            shopItems.map((item,index)=>(
                <ul key={index}>
                    <li>name: {item.name}</li>
                    <li>quantity: {item.quantity}</li>
                </ul>
            ))
        }
        </ul> 
    </div>
  )
}

export default ShoppingList