import "./Card.css";


const Card = (props) =>{



    return (
        <div className="Card"> 
        <span className="Tituloproducto">{props.tittle}</span>
        <img className="Imgproducto"
            src={props.src}
            alt="imagen"/>
            <p>{props.description}</p>
            <p className="Precio">{props.precio}</p>
            <button className="BtnComprar">{props.button}</button>
        
        </div>
    );
};

export default Card;