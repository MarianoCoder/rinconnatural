import * as React from "react";
import Item from "./components/Item/Item";

const ItemDetail = () =>{

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null)
    React.useEffect(()=>{
        const url ="http://localhost:3001/products/0";
        
        setLoading(true);
        fetch(url)
            .then((response)=>{
            if (response.ok) {
                return response.json();
            }else{
                throw response;
            }

        })
            .then((data)=>setData(data))
           .catch((error) => setError(error))
           .finally(()=>setLoading(false));
               
           
        }, []);


  const comprarProducto =(product) => {
    console.log(`Has comprado el producto: ${product}`)
 };
        
return (
<div style={{display : "flex", justifyContent: "space-evently", flexWrap: "wrap"}}>
    {loading && <p>Cargando ...</p>}
    {error && <p>Ha habido un error {error.status}</p>}
    {error &&<button>Inicio</button>}
    {data?.map((producto)=> {
        return(
    
     <Item
        key={producto.id}
        title= {producto.title}
        imagen={producto.image}
        description= {producto.description}
        price={producto.price}
        comprar={comprarProducto}
    />
    );
    })}


</div>
);
};
export default ItemDetail;