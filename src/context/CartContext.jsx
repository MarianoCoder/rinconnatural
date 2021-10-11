import * as React from "react";

const CartContext = React.createContext();
CartContext.displayName = "CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState ([]);
    

    const addItem = (items) => {
        
        

        const isInCart = cart.find(x => x.id === items.id)

        if(isInCart){
            setCart(cart.map(x => x.id === isInCart.id
                ? items
                : x
                ))
        }else{
            setCart((prevState) => [...prevState, items]);
        }
    };

    const removeItem = (items) =>{
        setCart(cart.filter(x => x.id !== items.id))
        
    };

    const clear = () =>{
        setCart([])
    };

    

    const getQuantity = () =>{
        let quantity = 0;
        cart.forEach((product)=>{
          
          quantity += Number(product.quantity);
    
        });
        return quantity;
    };

    const value={ cart, addItem, removeItem, clear, getQuantity };

    return <CartContext.Provider value={value}>{children} </CartContext.Provider>
};
export const useCart = () => {
    const context = React.useContext(CartContext);

    if(!context) {
        throw new Error ("useCart debe usarse desde adentro de un CartProvider")
    }
    return context;
};




