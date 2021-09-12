import * as React from 'react';
import Card from '../components/Card/Card';


const ItemListContainer = () =>{

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
        src="https://larepo.com.ar/dlr/12-home_default/almendras-peladas-x-1-kg.jpg"
        description= "Frutos secos"
        precio="precio: $100"
        button={comprarProducto}/>
      <Card 
        title= "Nueces"
        src="https://larepo.com.ar/dlr/411-home_default/nuez-pelada-dorada-x-1-kg.jpg"
        description= "Frutos secos"
        precio="precio: $140"
        button={comprarProducto}/>
      <Card 
        title= "Avellanas"
        src="https://larepo.com.ar/dlr/7336-home_default/avellanas-peladas-x-500-g.jpg"
        description= "Frutos secos"
        precio="precio: $170"
        button={comprarProducto}/>
      </div>
        </div>

        
    );
};

export default ItemListContainer;
