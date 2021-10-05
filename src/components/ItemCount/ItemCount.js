import * as React from 'react';


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
            <button onClick={onAdd}>Agregar al carrito</button>
            
        </div>
        </div>
    );
};
export default ItemCount





