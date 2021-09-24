import * as React from 'react';
import Item from "../Item/Item";


const ItemList = ({setSelectedCategory}) =>{
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
  <div style={{display : "flex", justifyContent: "space-evently", flexWrap: "wrap"}}>
      {cargando &&  <p>Cargando . . .</p>}
      {items.map((producto)=>{
        return (
        
        <Item 
        key={producto.id}
        productId={producto.id}
        title= {producto.title}
        image={producto.image}
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
  {id : "0" ,
  title: "Almendras", 
  image: "https://larepo.com.ar/dlr/12-home_default/almendras-peladas-x-1-kg.jpg",
  description: "Frutos secos", 
  price: "$160",
  categoryId: "3"
},
  {id : "1" ,
  title: "Nueces", 
  image: "https://larepo.com.ar/dlr/411-home_default/nuez-pelada-dorada-x-1-kg.jpg", 
  description: "Frutos secos", 
  price: "$120",
  categoryId: "3"
},
  {id : "2" ,
  title: "Avellanas", 
  image: "https://larepo.com.ar/dlr/7336-home_default/avellanas-peladas-x-500-g.jpg",
  description: "Frutos secos", 
  price: "$180",
  categoryId: "3"},
  {
    id: "3",
    title: "Chocolate",
    description: "Repostería",
    price: "$330",
    image: "https://larepo.com.ar/dlr/7651-home_default/chocolate-familiar-negro-para-taza-con-stevia-x-100-g-colonial.jpg",
    categoryId: "2"
  },
  {
    id: "4",
    title: "Pasta de Mani",
    description: "Repostería",
    price: "$350",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVeXCWQVrgSEcR_Jzrh6qBjEedJLXJDw07w&usqp=CAU",
    categoryId: "2"
  },
  {
    id: "5",
    title: "Ghee",
    description: "Repostería",
    price: "$410",
    image: "https://neufood.com.ar/wp-content/uploads/2020/10/dona_magda_ghee1-d5c7612d1860efb58815951819464687-640-0.jpg",
    categoryId: "2"
  }
]

const categorias =[{
  id: 0,
  name: "Suplementos"
},
{id: 1,
  name: "Herboristeria"
},
{id: 2,
  name: "Reposteria"
},
{id: 3,
  name: "Frutos secos"
}]

  
  export default ItemList ;