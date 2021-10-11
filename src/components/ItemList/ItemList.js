import * as React from 'react';
import Item from "../Item/Item";
import { useParams } from "react-router";


const ItemList = () =>{
    const [items, setItems] = React.useState ([]);
    const [cargando, setCargando] = React.useState(false)
    const {category} = useParams()


    

    React.useEffect(()=>{
      

      const productos =[
        {id: "0" ,
        title: "Almendras", 
        image: "https://larepo.com.ar/dlr/12-home_default/almendras-peladas-x-1-kg.jpg",
        description: "Frutos secos", 
        price: "$160",
        category: "Frutos"
      },
        {id: "1" ,
        title: "Nueces", 
        image: "https://larepo.com.ar/dlr/411-home_default/nuez-pelada-dorada-x-1-kg.jpg", 
        description: "Frutos secos", 
        price: "$120",
        category: "Frutos"
      },
        {id: "2" ,
        title: "Avellanas", 
        image: "https://larepo.com.ar/dlr/7336-home_default/avellanas-peladas-x-500-g.jpg",
        description: "Frutos secos", 
        price: "$180",
        category: "Frutos"
      },
        {
          id: "3",
          title: "Chocolate",
          description: "Repostería",
          price: "$330",
          image: "https://larepo.com.ar/dlr/7651-home_default/chocolate-familiar-negro-para-taza-con-stevia-x-100-g-colonial.jpg",
          category: "Reposteria"
        },
        {
          id: "4",
          title: "Pasta de Mani",
          description: "Repostería",
          price: "$350",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVeXCWQVrgSEcR_Jzrh6qBjEedJLXJDw07w&usqp=CAU",
          category: "Reposteria"
        },
        {
          id: "5",
          title: "Ghee",
          description: "Repostería",
          price: "$410",
          image: "https://neufood.com.ar/wp-content/uploads/2020/10/dona_magda_ghee1-d5c7612d1860efb58815951819464687-640-0.jpg",
          category: "Reposteria"
        }
      ]

      let categoryProducts=[]
    
    if (category){
        categoryProducts = productos.filter(i =>i.category === category)
    }else{
      categoryProducts = productos
    }

    const getProducts=(productos)=>{
      return new Promise ((resolve) =>{
          setTimeout(()=>{
              resolve(productos);
          }, 2000);
      });
  };

    setCargando(true);
      getProducts(categoryProducts).then((result)=> setItems(result))
      .finally(()=> setCargando(false));
    },[category]);

    const comprarProducto =(product) => {
      console.log(`Has comprado el producto: ${product}`)
    };


    
  
  return (
  <div style={{display : "flex", justifyContent: "space-evently", flexWrap: "wrap"}}>
      {cargando &&  <p>Cargando . . .</p>}
      {items.map((items)=>{
        return (
        
        <Item 
        key={items.id}
        productId={items.id}
        title= {items.title}
        image={items.image}
        description= {items.description}
        price={items.price}
        comprar={comprarProducto}
        />
        
      );
    })}
    
  </div>
  );
  };


  export default ItemList;