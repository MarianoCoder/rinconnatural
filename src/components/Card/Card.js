import "./Card.css";


const Card = ({ title, description, imagen, comprar, precio }) =>{



    return (
        <div className="Card"> 
        <span className="Tituloproducto">{title}</span>
        <img className="Imgproducto"
            src={imagen}
            alt="imagen"/>
            <p>{description}</p>
            <p className="Precio">{precio}</p>
            <button onClick={comprar}>Comprar</button>
        
        </div>
    );
};

export default Card;