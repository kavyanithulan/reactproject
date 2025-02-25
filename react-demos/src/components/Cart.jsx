const Cart = ()=>{
    const items = ["Phone", "Mobile","Bag"];
    return (
        <>
        <h1>Cart : 🛒</h1>
        {items.length>4 && <h2>Your cart has {items.length} items</h2>}
       <h3>Products: ✌️ </h3>
            {items.map(item=>(
                 <ul key={item}>
                <li>{item}</li>
                </ul>
            ))

            }
       
        </>
    );
}

export default Cart;