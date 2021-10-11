import * as React from "react";
import "./Cart.css"
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
                
                <div key={items.id} className="cartResume">
                    <span>{items.title}</span>
                    <span>{items.quantity}</span>
                    <span>$ {items.price * items.quantity}</span>
                    <button onClick={()=>removeItem(items)}>Eliminar</button>
                </div>
           ))}
           <h2> Total: {cart.reduce((a,i) => a + i.price * i.quantity, 0)}</h2>

           <button onClick={clearCart}> Vaciar Carrito </button>
        </div>
    )}
}

export default Cart;