import * as React from 'react';
<<<<<<< HEAD
import "./ItemCount.css"
=======
>>>>>>> 9997aa136d68d5f56b990c9589212c6b85bce1dd


function ItemCount({stock, initial, onAdd }) {
   
    const[counter, setCounter] = React.useState(1);
    
    const handleClick = () => {
        if (counter < stock)
        setCounter((stock)=> stock + 1);
    }
    const handleClickmenos = () => {
        
        setCounter((stock)=> stock - 1);
        if (counter === 1)
        setCounter(counter)
    }
    
    return (
        <div>
        <div>
            <p>Usted está comprando: {counter} un </p>
            
          <button type="number" onClick={handleClickmenos} onChange={(e)=>setCounter(e.target.value)}>-</button> {counter} <button type="number" onClick={handleClick} onChange={(e)=>setCounter(e.target.value)}>+</button> 
        </div>
        <div>
<<<<<<< HEAD
            <button className="counterButton" onClick={()=>onAdd(counter)}>Agregar al carrito</button>
            
=======
            <button onClick={()=>onAdd(counter)}>Agregar al carrito</button>
>>>>>>> 9997aa136d68d5f56b990c9589212c6b85bce1dd
            
        </div>
        </div>
    );
};
export default ItemCount





