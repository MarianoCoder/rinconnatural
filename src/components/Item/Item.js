import * as React from 'react';
import "./Item.css";
import { Link } from "react-router-dom";


<<<<<<< HEAD

const Item = ({ title, description, image, price, productId, coin }) =>{
=======
const Item = ({ title, description, image, comprar, price, productId, coin }) =>{
>>>>>>> 9997aa136d68d5f56b990c9589212c6b85bce1dd



    return (
        <div className="Card"> 
        <span className="Tituloproducto">{title}</span>
        <Link to={`/productos/${productId}`}>
        <img className="Imgproducto"
            src={image}
            alt="imagen"/> </Link>
            <p className="Description">{description}</p>
            <p className="Price">{coin}{price}</p>
            
<<<<<<< HEAD
            
=======
>>>>>>> 9997aa136d68d5f56b990c9589212c6b85bce1dd
        
        </div>
    );
}
export default Item;