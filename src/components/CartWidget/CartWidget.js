import "./CartWidget.css";

const CartWidget = (props) =>{

    return (
        <div className="IconoCarrito"> 
        
        <img className="ImgCarrito"
            src={props.src}
            alt="imagen"/>
        
        </div>
    );
};

export default CartWidget;