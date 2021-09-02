import React from 'react';
import './NavBar.css'

function NavBar() {
    return (
        <div className="navbar">
        <div>Rincón Natural</div>
      <div className="menu">
        <li>Inicio</li>
        <li>Tienda</li>
        <li>Contacto</li>
      </div>
      <div className="categorias"><button>Frutos Secos</button>
      <button>Legumbres</button>
      <button>Hierbas</button>
      <button>Repostería</button></div>

        </div>
    )
}

export default NavBar;
