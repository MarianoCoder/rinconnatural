import * as React from "react";
import Item from "../Item/Item";




const ItemDetail = ({unNumero}) =>{
    const [items, setItems] = React.useState ([]);
    const [cargando, setCargando] = React.useState(false)
    

    React.useEffect(()=>{
<<<<<<< HEAD
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
=======
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
            {
              id: 3,
              title: "Chocolate",
              description: "Repostería",
              price: 330,
              image: "https://larepo.com.ar/dlr/7651-home_default/chocolate-familiar-negro-para-taza-con-stevia-x-100-g-colonial.jpg"
            },
            {
              id: 4,
              title: "Pasta de Mani",
              description: "Repostería",
              price: 350,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVeXCWQVrgSEcR_Jzrh6qBjEedJLXJDw07w&usqp=CAU"
            },
            {
              id: 5,
              title: "Ghee",
              description: "Repostería",
              price: 410,
              image: "https://neufood.com.ar/wp-content/uploads/2020/10/dona_magda_ghee1-d5c7612d1860efb58815951819464687-640-0.jpg"
            }]
            const categorias =[{
              id: 0,
              name: "Reposteria"
            },
            {id: 1,
              name: "Herboristeria"
            }]
>>>>>>> ecc67b3fa15676bfa27beef47bcdbf36c712591d

            
            const productId = productos.filter(productos => productos.id === 4)

        const getProducts=()=>{
        return new Promise ((resolve) =>{
            setTimeout(()=>{
                resolve(productId);
            }, 2000);
        });
    };
   
        setCargando(true);
        getProducts().then((result)=> setItems(result))
        .finally(()=> setCargando(false));
    }, []);

    const comprarProducto =(product) => {
      console.log(`Has comprado el producto: ${product}`)
    };

   
    
  
  return (
  <div style={{display : "flex", justifyContent: "space-evently", flexWrap: "wrap"}}>
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


  
  export default ItemDetail;