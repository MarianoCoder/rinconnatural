import * as React from 'react';
import "./Item.css";
import { Link } from "react-router-dom";


const Item = ({ title, description, imagen, comprar, price, productId }) =>{



    return (
        <div className="Card"> 
        <span className="Tituloproducto">{title}</span>
        <Link to={`/productos/${productId}`}>
        <img className="Imgproducto"
            src={imagen}
            alt="imagen"/> </Link>
            <p className="Description">{description}</p>
            <p className="Price">{price}</p>
            <button onClick={comprar}>Comprar</button>
        
        </div>
    );
}
export default Item;