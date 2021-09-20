import * as React from 'react';
import ItemList from '../components/ItemList/ItemList';

function ItemListContainer() {


  return(
    <div>
      <ItemList />
    </div>
  )

}

export default ItemListContainer;


/*const ItemListContainer = ({unNumero}) =>{
  const comprarProducto =(product) => {
    console.log(`Has comprado el producto: ${product}`)
  };

return (
<div style={{display : "flex", justifyContent: "space-evently"}}>
  
    {productos.map((producto)=>{
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
};*/



/*const productos =[
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
export default ItemListContainer;*/


/*const ItemListContainer = () =>{

  React.useEffect(()=>{
    //componentDidMount
    console.log("El componente se ha renderizado");
  
  return () => {
    //componentDidUnmount
    console.log("El componente va a desmontarse");
  };
});

    const comprarProducto =(product) => {
      console.log(`Has comprado el producto: ${product}`)
    };


    return (

        <div>
            
      <div style={{display: "flex"}}>
      <Card 
        title= "Almendras"
        imagen="https://larepo.com.ar/dlr/12-home_default/almendras-peladas-x-1-kg.jpg"
        description= "Frutos secos"
        precio="precio: $100"
        comprar={comprarProducto}/>
      <Card 
        title= "Nueces"
        imagen="https://larepo.com.ar/dlr/411-home_default/nuez-pelada-dorada-x-1-kg.jpg"
        description= "Frutos secos"
        precio="precio: $140"
        comprar={comprarProducto}/>
      <Card 
        title= "Avellanas"
        imagen="https://larepo.com.ar/dlr/7336-home_default/avellanas-peladas-x-500-g.jpg"
        description= "Frutos secos"
        precio="precio: $170"
        comprar={comprarProducto}/>
      </div>
        </div>

        
    );
};

export default ItemListContainer;*/
