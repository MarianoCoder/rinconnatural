import * as React from 'react';

<<<<<<< HEAD

function ItemCount({stock, initial, addOnn}) {
    
    const[counter, setCounter] = React.useState(1);
=======
const ItemCount =({stock, initial, addOnn}) => {
    const[counter, setCounter] = React.useState(1);
    
>>>>>>> a1ca6d8d526c625383ea5a75d44a481071da0c38
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
<<<<<<< HEAD
            <button>Agregar al carrito</button>
        </div>
        </fragment>
=======
            <button>Agregar al Carrito</button>
        </div>
        </fragment>

>>>>>>> a1ca6d8d526c625383ea5a75d44a481071da0c38
    )
}
export default ItemCount

