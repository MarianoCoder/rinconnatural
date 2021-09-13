import * as React from 'react';

const ItemCount =({stock, initial, addOnn}) => {
    const[counter, setCounter] = React.useState(1);
    
    const handleClick = () => {
        setCounter((prevState)=> prevState + 1);
    }
    const handleClickmenos = () => {
        setCounter((prevState)=> prevState - 1);
    }
    return (
        <fragment>
        <div>
          <button onClick={handleClickmenos}>-</button> {counter} <button onClick={handleClick}>+</button> 
        </div>
        <div>
            <button>Agregar al Carrito</button>
        </div>
        </fragment>

    )
}
export default ItemCount

