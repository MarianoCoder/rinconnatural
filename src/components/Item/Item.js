import * as React from 'react';
import "./Item.css";


const Item = ({ title, description, imagen, comprar, price }) =>{



    return (
        <div className="Card"> 
        <span className="Tituloproducto">{title}</span>
        <img className="Imgproducto"
            src={imagen}
            alt="imagen"/>
<<<<<<< HEAD
            <p className="Description">{description}</p>
=======
<<<<<<< HEAD
            <p className="Description">{description}</p>
=======
            <p>{description}</p>
>>>>>>> 98a20a8655ea9660ebb4c2e1f04ebaf25433430a
>>>>>>> f1683f5606cd9fe9b9749d33908a0b8ae0040a48
            <p className="Price">{price}</p>
            <button onClick={comprar}>Comprar</button>
        
        </div>
    );
}
export default Item;