import * as React from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () =>{
    //const [data, setData] = React.useState([]);
   // const [loading, setLoading] = React.useState(false);
   // const [error, setError] = React.useState(null)
   // React.useEffect(()=>{
     //   const url ="http://localhost:3001/products/";
        
     //   setLoading(true);
      //  fetch(url)
       //     .then((response)=>{
          //  if (response.ok) {
          //      return response.json();
          //  }else{
          //      throw response;
          //  }

      //  })
          //  .then((data)=>setData(data))
         //  .catch((error) => setError(error))
          // .finally(()=>setLoading(false));
               
           
      //  }, []);


 // const comprarProducto =(product) => {
  //  console.log(`Has comprado el producto: ${product}`)
 //};
        
return (
<div style={{display : "flex", justifyContent: "space-evently", flexWrap: "wrap"}}>

    
     <ItemDetail />
    
    
</div>
);
};

export default ItemDetailContainer;