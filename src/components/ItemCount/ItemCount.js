import * as React from 'react';


function ItemCount({stock, initial, onAdd}) {
    
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
          <button onClick={handleClickmenos}>-</button> {counter} <button onClick={handleClick}>+</button> 
        </div>
        <div>
            <button onClick={()=>onAdd(counter)}>Agregar al carrito</button>
        </div>
        </div>
    );
};
export default ItemCount

