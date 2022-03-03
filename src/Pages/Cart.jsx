import * as React from "react";
import "./Cart.css";
import { useCart } from "../context/CartContext";
import { useLogin } from "../context/LoginContext";
import { getFirestore } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useHistory } from "react-router";
import { Link, useParams } from "react-router-dom";

const Cart = () => {
  const { login } = useLogin();
  const { cart, clear, removeItem } = useCart();
  const [remove, setRemove] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const History = useHistory();
  const { id } = useParams();
  

  const total = cart.reduce((a, i) => a + i.price * i.quantity, 0);

  const newOrder = {
    login,
    cart,
    total,
    date: firebase.firestore.FieldValue.serverTimestamp(),
  };

  const handleCheckout = () => {
    const db = getFirestore();
    const ordersCollection = db.collection("orders");
   
    

    ordersCollection
      .add(newOrder)
      .then((docRef) => {
        console.log("Se creo el documento exitosamente", docRef.id)})
        
      /*.then((docRef) => {
        console.log("Se creo el documento exitosamente", docRef.id)
        const order = docRef.id;

        ordersCollection.get(order)
                        .then((docRef)=> {
                        if (!docRef.exists) {
                          console.log("No hay productos");
                        } else {
                          setItems({ id: docRef.id, ...docRef.data() });
                        }
      })*/
      .catch((error) => console.log(error))
      .finally(() => {});

      History.push(`/orderDetail/${id}`);

      
  
}

  const handleUpdate = () => {
    const db = getFirestore();
    const ordersCollection = db.collection("orders");
    const productRef = ordersCollection.doc("rkHJcTwgLIHJZUqrcCzs");

    productRef.update({ price: 50000 });
  };

  const handleDelete = () => {
    const db = getFirestore();
    const ordersCollection = db.collection("orders");
    const productRef = ordersCollection.doc("MPqG5TZehDIVD6srIwmV");

    productRef.delete();
    clear(remove, items);
  };

  if (cart.length === 0) {
    return (
      <div className="emptyCart">
        Tu carrito está vacío... te esperamos en la Tienda!
      </div>
    );
  } else {
    return (
      <div className="boxCarrito">
        <h2>Tu carrito</h2>
        {cart.map((items) => (
          <div key={items.id} className="cartResume">
            <span>{items.title}</span>
            <span>{items.quantity}</span>
            <span>$ {items.price * items.quantity}</span>
            <button className="btnCart" onClick={() => removeItem(items)}>
              Eliminar
            </button>
          </div>
        ))}

        <h2> Total: $ {total}</h2>
        <Link to={`/orderDetail/${id}`}><button className="btnCart" onClick={handleCheckout}> 
          Finalizar Compra
        </button></Link>
        <button className="btnCart" onClick={handleUpdate}>
          Modificar Carrito
        </button>
        <button className="btnCart" onClick={handleDelete}>
          Eliminar Orden{" "}
        </button>
      </div>
    );
  }
};

export default Cart;
