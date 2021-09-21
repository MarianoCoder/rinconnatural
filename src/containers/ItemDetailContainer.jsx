import * as React from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";

<<<<<<< HEAD



const ItemDetailContainer = () =>{
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    
=======
const ItemDetailContainer = () =>{
<<<<<<< HEAD
    //const [data, setData] = React.useState([]);
   // const [loading, setLoading] = React.useState(false);
   // const [error, setError] = React.useState(null)
   // React.useEffect(()=>{
     //   const url ="http://localhost:3001/products/";
=======
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null)
>>>>>>> f1683f5606cd9fe9b9749d33908a0b8ae0040a48
    React.useEffect(()=>{
        const url ="http://localhost:3001/products/";
>>>>>>> 0abc214c929855775b9b2fc89401d6f409a6256b
        
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