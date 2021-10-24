import * as React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {NavLink} from "react-router-dom";
import {useCart} from "../../context/CartContext"
import carrito from "../Imagenes/carrito.png"



function NavBar() {
  const { cart } = useCart();
    
    return (
        <nav className="navbar">
      <ul>
        <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/category/Reposteria/">Reposteria</NavLink>
        </li>
        <li>
        <NavLink to="/category/Frutos/">Frutos Secos</NavLink>
        </li>

        <li>
          {cart.length !== 0 && <span>{cart.length}</span>
          } 
        <NavLink to="/cart"> Carrito</NavLink>
        </li>
      </ul>
      
      <CartWidget src={carrito} alt="logo"/>
      
      </nav>
    )
}

export default NavBar;
