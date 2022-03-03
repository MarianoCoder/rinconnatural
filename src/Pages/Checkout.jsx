import * as React from "react";
import { getFirestore } from "../firebase";
import "firebase/compat/firestore";
import { useParams } from "react-router";
import "./CheckOut.css";

const CheckOut = () => {
  const [items, setItems] = React.useState([]);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    
    
    const db = getFirestore();
    const ordersCollection = db.collection("orders");
    const items = ordersCollection.doc(id);
    
        
        items
             .get()
             .then((docRef) => {
            if (!docRef.exists) {
              console.log("La orden no existe");
        } else {
          setItems({ id: docRef.id, ...docRef.data() });
          
        };
      })
      .catch((error) => setError(error))
      .finally(() => {}); 
      console.log(id, "hola")
    
  }, [id]);


  

  
  

    return (
      <div className="orderResume">
          <span>Gracias por su compra!!</span>

          {items.map((items) => (
          <div key={items.id} className="cartResume">
            <span>{items.login}</span>
            <span>{items.cart}</span>
            <span>{items.date}</span> 
            </div>
            ))}

  
        
      </div>
    );
  };
  
  export default CheckOut;