import * as React from 'react';


function ItemCount({stock, initial, addOnn}) {
    
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
        <fragment>
        <div>
          <button onClick={handleClickmenos}>-</button> {counter} <button onClick={handleClick}>+</button> 
        </div>
        <div>
            <button>Agregar al carrito</button>
        </div>
        </fragment>
    )
}
export default ItemCount

