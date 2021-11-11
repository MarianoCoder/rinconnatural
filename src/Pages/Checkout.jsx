import * as React from "react";
import { getFirestore } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useParams } from "react-router";
import "./CheckOut.css";



const CheckOut = () => {

  const [data, setData] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    

    const db = getFirestore();
    const ordersCollection = db.collection("orders");
    const order = ordersCollection.doc(id)
        
        order
             .get()
             .then((doc) => {
            if (!doc.exists) {
              console.log("El producto no existe");
        } else {
          setData({ id: doc.id, ...doc.data() });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  }, [id]);

  

    return (
      <div>
          <span className="orderResume">Gracias por su compra!!</span>

          {data.map((items) => (
          <div key={items.id} className="cartResume">
            <span>{items.title}</span>
            <span>{items.quantity}</span> 
            </div>
            ))}

  
        
      </div>
    );
  };
  
  export default CheckOut;