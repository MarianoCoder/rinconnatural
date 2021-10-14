import * as React from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from "react-router";
import { getFirestore } from "../firebase";


const ProductDetail = () => {
  const [items, setItems] = React.useState ({});
  const [cargando, setCargando] = React.useState(false)
  const {id} = useParams();
 

  React.useEffect(() => {

    const db = getFirestore();

    const productsColletion = db.collection("products");
    
    const product = productsColletion.doc(id);

    product
    .get()
    .then((doc)=>{
      if(!doc.exists){
        console.log("El producto no existe");
      }
    }
    )
    .catch(()=>{})
    .finally(()=>{});

  }, [id]);

    /*React.useEffect(()=>{
        const productos =[
            {id: "0",
            title: "Almendras", 
            image: "https://larepo.com.ar/dlr/12-home_default/almendras-peladas-x-1-kg.jpg",
            description: "Frutos secos", 
            price: "$160"},
          
            {id: "1" ,
            title: "Nueces", 
            image: "https://larepo.com.ar/dlr/411-home_default/nuez-pelada-dorada-x-1-kg.jpg", 
            description: "Frutos secos", 
            price: "$120"},
          
            {id: "2",
            title: "Avellanas", 
            image: "https://larepo.com.ar/dlr/7336-home_default/avellanas-peladas-x-500-g.jpg",
            description: "Frutos secos", 
            price: "$180"},

            {id: "3",
            title: "Chocolate",
            description: "Repostería",
            price: "$330",
            image: "https://larepo.com.ar/dlr/7651-home_default/chocolate-familiar-negro-para-taza-con-stevia-x-100-g-colonial.jpg"
            },

            {id: "4",
            title: "Pasta de Mani",
            description: "Repostería",
            price: "$350",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVeXCWQVrgSEcR_Jzrh6qBjEedJLXJDw07w&usqp=CAU"
            },

            {id: "5",
            title: "Ghee",
            description: "Repostería",
            price: "$410",
            image: "https://neufood.com.ar/wp-content/uploads/2020/10/dona_magda_ghee1-d5c7612d1860efb58815951819464687-640-0.jpg"
            }]

          const productId = productos.filter(items => items.id === id)


          const getProducts=()=>{
              return new Promise ((resolve) =>{
              setTimeout(()=>{
              resolve(...productId);
            },);
        });
    };
        
        getProducts().then((result) => setItems(result))
       
      }, [id]);*/

  
  return (
    <div style={{display : "flex", justifyContent: "space-evently", flexWrap: "wrap"}}>
     
      
​<ItemDetail key={items.id} title={items.title} description={items.description} price={items.price} image={items.image} />
      
      
       
  </div>
  
  )}
  

export default ProductDetail;