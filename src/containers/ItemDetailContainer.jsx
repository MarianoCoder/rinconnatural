import * as React from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";

<<<<<<< HEAD



const ItemDetailContainer = () =>{
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    
=======
const ItemDetailContainer = () =>{
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null)
>>>>>>> f1683f5606cd9fe9b9749d33908a0b8ae0040a48
    React.useEffect(()=>{
        const url ="http://localhost:3001/products/";
        
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
    
     <ItemDetail
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

export default ItemDetailContainer;