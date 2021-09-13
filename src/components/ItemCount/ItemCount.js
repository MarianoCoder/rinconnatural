import * as React from 'react';

const ItemCount =() => {
    const[counter, setCounter] = React.useState(0);
    const handleClick = () => {
        setCounter((prevState)=> prevState + 1);
    }
    const handleClickmenos = () => {
        setCounter((prevState)=> prevState - 1);
    }
    return (
        <div>
          <button onClick={handleClickmenos}>-</button> {counter} <button onClick={handleClick}>+</button> 
        </div>

    )
}
export default ItemCount

