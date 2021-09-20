import * as React from 'react';
import Item from "../Item/Item";


<<<<<<< HEAD

=======
>>>>>>> 98a20a8655ea9660ebb4c2e1f04ebaf25433430a
const ItemList = ({unNumero}) =>{
    const [items, setItems] = React.useState ([]);
    const [cargando, setCargando] = React.useState(false)

    React.useEffect(()=>{
        setCargando(true);
        getProducts().then((result)=> setItems(result))
        .finally(()=> setCargando(false));
    }, []);

    const comprarProducto =(product) => {
      console.log(`Has comprado el producto: ${product}`)
    };

    const getProducts=()=>{
        return new Promise ((resolve) =>{
            setTimeout(()=>{
                resolve(productos);
            }, 2000);
        });
    };
  
  return (
  <div style={{display : "flex", justifyContent: "space-evently"}}>
      {cargando &&  <p>Cargando . . .</p>}
      {items.map((producto)=>{
        return (
           
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

  const productos =[
  {id : 0 ,
  title: "Almendras", 
  image: "https://larepo.com.ar/dlr/12-home_default/almendras-peladas-x-1-kg.jpg",
  description: "Frutos secos", 
  price: "$160"},

  {id : 1 ,
  title: "Nueces", 
  image: "https://larepo.com.ar/dlr/411-home_default/nuez-pelada-dorada-x-1-kg.jpg", 
  description: "Frutos secos", 
  price: "$120"},

  {id : 2 ,
  title: "Avellanas", 
  image: "https://larepo.com.ar/dlr/7336-home_default/avellanas-peladas-x-500-g.jpg",
  description: "Frutos secos", 
  price: "$180"},
  
]
  
  export default ItemList ;