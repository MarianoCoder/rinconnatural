import * as React from 'react';
import "./Item.css";
import { Link } from "react-router-dom";


const Item = ({ title, description, image, comprar, price, productId, coin }) =>{



    return (
        <div className="Card"> 
        <span className="Tituloproducto">{title}</span>
        <Link to={`/productos/${productId}`}>
        <img className="Imgproducto"
            src={image}
            alt="imagen"/> </Link>
            <p className="Description">{description}</p>
            <p className="Price">{coin}{price}</p>
            
        
        </div>
    );
}
export default Item;