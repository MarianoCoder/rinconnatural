import "./Card.css";


const Card = (props) =>{



    return (
        <div className="Card"> 
        <span className="Tituloproducto">{props.title}</span>
        <img className="Imgproducto"
            src={props.src}
            alt="imagen"/>
            <p>{props.description}</p>
            <p className="Precio">{props.precio}</p>
            <button onClick={props.comprar}>Comprar</button>
        
        </div>
    );
};

export default Card;