function ProductList(){
    const products = [
        {id:1,name:"Phone",price:"$599"},
        {id:2,name:"Laptop",price:"$999"},
        {id:3,name:"HeadPhone",price:"$99"}
    ];
    return (
        <div>
            {products.map(product=>(
                <ul key={product.id}>
                    <li>{product.name}</li>
                    <li>{product.price}</li>
                </ul>
            ))}
        </div>
    );
}

export default ProductList;