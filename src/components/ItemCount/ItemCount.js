import * as React from 'react';
import {useCart} from "../../context/CartContext"


function ItemCount({stock, initial, onAdd}) {
    const {addItem} = useCart ();
    const[counter, setCounter] = React.useState(1);
    const [items, setItems] = React.useState ([]);

    
    const handleClick = () => {
        if (counter < stock)
        setCounter((stock)=> stock + 1);
    }
    const handleClickmenos = () => {
        
        setCounter((stock)=> stock - 1);
        if (counter === 1)
        setCounter(counter)
    }
    const addToCart =()=>{
        addItem(items, counter);
      };
    return (
        <div>
        <div>
          <button type="number" onClick={handleClickmenos} onChange={(e)=>setCounter(e.target.value)}>-</button> {counter} <button type="number" onClick={handleClick} onChange={(e)=>setCounter(e.target.value)}>+</button> 
        </div>
        <div>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
        </div>
    );
};
export default ItemCount





