import * as React from "react";
import Item from "./components/Item/Item";

const ItemDetail = () =>{


    
    React.useEffect(()=>{
        const url ="http://localhost:3001/products/0";
        fetch(url) .then((data)=>setData(data))
    })
        
   
        
return (
<div style={{display : "flex", justifyContent: "space-evently", flexWrap: "wrap"}}>
    
     <Item
        key={producto.id}
        title= {producto.title}
        imagen={producto.image}
        description= {producto.description}
        price={producto.price}
        comprar={comprarProducto}
    />
    );


</div>
);
};
export default ItemDetail;