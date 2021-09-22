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
<<<<<<< HEAD
            alt="imagen"/> </Link>
=======
            alt="imagen"/>
>>>>>>> ce145392d464f8c551881530194edc3ea11b8009
            <p className="Description">{description}</p>
            <p className="Price">{price}</p>
            <button onClick={comprar}>Comprar</button>
        
        </div>
    );
}
export default Item;