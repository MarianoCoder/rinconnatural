import * as React from "react";
import Item from "../Item/Item";


<<<<<<< HEAD


const ItemDetail = ({unNumero}) =>{
    const [items, setItems] = React.useState ([]);
    const [cargando, setCargando] = React.useState(false)
    

    React.useEffect(()=>{
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
              descriptio: "Repostería",
              price: 410,
              image: "https://neufood.com.ar/wp-content/uploads/2020/10/dona_magda_ghee1-d5c7612d1860efb58815951819464687-640-0.jpg"
            }]

            
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

   
=======
<<<<<<< HEAD

    
    React.useEffect(()=>{
        const url ="http://localhost:3001/products/0";
        fetch(url) .then((data)=>setData(data))
    })
        
   
        
return (
<div style={{display : "flex", justifyContent: "space-evently", flexWrap: "wrap"}}>
=======
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
>>>>>>> f1683f5606cd9fe9b9749d33908a0b8ae0040a48
>>>>>>> 0abc214c929855775b9b2fc89401d6f409a6256b
    
  
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
<<<<<<< HEAD
        />
      );
    })}
    
  </div>
  );
  };
=======
    />
    );
<<<<<<< HEAD
=======
    })}
>>>>>>> f1683f5606cd9fe9b9749d33908a0b8ae0040a48
>>>>>>> 0abc214c929855775b9b2fc89401d6f409a6256b


  
  export default ItemDetail;