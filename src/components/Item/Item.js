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
            <p>{description}</p>
>>>>>>> 98a20a8655ea9660ebb4c2e1f04ebaf25433430a
            <p className="Price">{price}</p>
            <button onClick={comprar}>Comprar</button>
        
        </div>
    );
}
export default Item;