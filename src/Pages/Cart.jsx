import * as React from "react";
import { useCart } from "../context/CartContext"

const Cart = () => {
    
    const {cart, clear, removeItem} = useCart();
    const [remove, setRemove] = React.useState([])
    const [items, setItems] = React.useState([]);

    const clearCart=()=>{
        clear(remove, items);
    };

    console.log("hola",cart)

    if (cart.length === 0){
        return(
            <div>El carrito está vacío</div>
        )
    }else{
        return (
        <div>
           <h2>Tu carrito</h2>
           {
               cart.map((items)=>(
                
                <div key={items.id}>
                    <span>{items.title}</span>
                    <span>{items.quantity}</span>
                    <span>$ {items.price * items.quantity}</span>
                </div>
           ))}

           <button onClick={clearCart}> Vaciar Carrito </button>
        </div>
    )}
}

export default Cart;