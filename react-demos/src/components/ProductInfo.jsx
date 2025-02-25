const ProductInfo = ()=> {
    const product = {
                    prodName: "Laptop",
                    price:1200,
                    availability:"In Stock"
                };
    return (
       <div>
           <h1>Product Name: {product.prodName}</h1>
           <h1>Product price: ${product.price}</h1>
           <h1>Product availability: {product.availability}</h1>

           </div>
    );
};

export default ProductInfo;