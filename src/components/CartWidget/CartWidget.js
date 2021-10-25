import "./CartWidget.css";

const CartWidget = (props) =>{

    return (
        <div className="IconoCarrito"> 
        
        <img 
            src={props.src}
            alt="imagen"/>
        
        </div>
    );
};

export default CartWidget;