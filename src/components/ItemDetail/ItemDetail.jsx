import * as React from "react";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './ItemDetail.css'
import {useCart} from "../../context/CartContext"
import { getFirestore } from "../../firebase";

const ItemDetail = () =>{
    const [isBuy, setIsBuy] = React.useState(false)
    const [items, setItems] = React.useState ([]);
    const [cargando, setCargando] = React.useState(false)
    const {id} = useParams();
    const {addItem} = useCart ();
  

    const addHandler = (quantity)=>{

      setIsBuy(true)
      addItem({...items, quantity: quantity}, )
    }

    React.useEffect(() => {

      const db = getFirestore();
  
      const productsCollection = db.collection("products");
      
      const items = productsCollection.doc(id);
  
      items
      .get()
      .then((doc)=>{
        if(!doc.exists){
          console.log("El producto no existe");
        }else{
         setItems({id: doc.id, ...doc.data()})
        }
      }
      )
      .catch(()=>{})
      .finally(()=>{});
  
    }, [id]);

   /* React.useEffect(()=>{
      const productos =[
        {id: "0" ,
        title: "Almendras", 
        image: "https://larepo.com.ar/dlr/12-home_default/almendras-peladas-x-1-kg.jpg",
        description: "Frutos secos", 
        price: 160,
        categoryId: "3"
      },
        {id: "1" ,
        title: "Nueces", 
        image: "https://larepo.com.ar/dlr/411-home_default/nuez-pelada-dorada-x-1-kg.jpg", 
        description: "Frutos secos", 
        price: 120,
        categoryId: "3"
      },
        {id: "2" ,
        title: "Avellanas", 
        image: "https://larepo.com.ar/dlr/7336-home_default/avellanas-peladas-x-500-g.jpg",
        description: "Frutos secos", 
        price: 180,
        categoryId: "3"},
        {
          id: "3",
          title: "Chocolate",
          description: "Repostería",
          price: 330,
          image: "https://larepo.com.ar/dlr/7651-home_default/chocolate-familiar-negro-para-taza-con-stevia-x-100-g-colonial.jpg",
          categoryId: "2"
        },
        {
          id: "4",
          title: "Pasta de Mani",
          description: "Repostería",
          price: 350,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVeXCWQVrgSEcR_Jzrh6qBjEedJLXJDw07w&usqp=CAU",
          categoryId: "2"
        },
        {
          id: "5",
          title: "Ghee",
          description: "Repostería",
          price: 410,
          image: "https://neufood.com.ar/wp-content/uploads/2020/10/dona_magda_ghee1-d5c7612d1860efb58815951819464687-640-0.jpg",
          categoryId: "2"
        }
      ]
      
      const categories =[{
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

            
      const productId = productos.filter(items => items.id === id)

        const getProducts=()=>{
        return new Promise ((resolve) =>{
            setTimeout(()=>{
                resolve(...productId);
            },);
        });
    };
   
        setCargando(true);
        getProducts().then((result)=> setItems(result))
        .finally(()=> setCargando(false));
    }, [id]);*/

    //const comprarProducto =(product) => {
     // console.log(`Has comprado el producto: ${product}`)
    //};


    
  return (
  <div style={{display : "block", justifyContent: "center", itemsAlign: "center"}}>
          
    <Item key={items.id} title={items.title} description={items.description} price={items.price} image={items.image}/>
    {
    }
      {!isBuy ? <ItemCount stock="6" initial="1" onAdd={addHandler} /> :
      <Link to="/cart"><button>Terminar compra</button></Link>
      }
  </div>
  );
  };


  
  export default ItemDetail;