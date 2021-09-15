import * as React from 'react';
import "./Item.css";


const Item = ({ title, description, imagen, comprar, price }) =>{



    return (
        <div className="Card"> 
        <span className="Tituloproducto">{title}</span>
        <img className="Imgproducto"
            src={imagen}
            alt="imagen"/>
            <p>{description}</p>
            <p className="Price">{price}</p>
            <button onClick={comprar}>Comprar</button>
        
        </div>
    );
}
export default Item;