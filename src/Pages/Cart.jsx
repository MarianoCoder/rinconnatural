import * as React from "react";
import {useCart} from "../context/CartContext"

const Cart = () => {

    const {clear} = useCart ();
    const [remove, setRemove] = React.useState ([])
    const [items, setItems] = React.useState ([]);


    const clearCart=()=>{
        clear(remove, items);
      };
   
    return (
        <div>
           <h1>Carrito</h1>

           <button onClick={clearCart}> Vaciar Carrito </button>
        </div>
    )
}

export default Cart;