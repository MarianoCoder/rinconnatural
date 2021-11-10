import * as React from "react";
import { getFirestore } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";



const CheckOut = () => {
    const [data, setData] = React.useState([]);

    const db = getFirestore();
    const ordersCollection = db.collection("orders");

    //ordersCollection
      //.add(newOrder)
      //.then((docRef) => {
       // console.log("Se creo el documento exitosamente", docRef.id)
        
        
        ordersCollection.get()
                        //.then((docRef)=> {})
                        //if (!docRef.exists) {
                        //console.log("No hay productos");
                       //} else {
                      //setData({ id: docRef.id, ...docRef.data() });
                        //}
     // })
      .catch((error) => console.log(error))
      .finally(() => {});
  






    return (
      <div>
          <span>Gracias por su compra!!</span>

          <span>Nombre:</span>
          <span>Total $</span>
        
        
      </div>
    );
  };
  
  export default CheckOut;