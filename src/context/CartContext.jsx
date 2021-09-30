import * as React from "react";

const CartContext = React.createContext([]);
CartContext.displayName = "CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState ([]);

    const addItem = (item, quantity) => {
        const newItem ={item, quantity};
        setCart((prevState) => [...prevState, newItem]);
    };

    const removeItem = (id) =>{
         //Eliminar producto con id elegido
    };

    const clear = () =>{
        setCart([])
    };

    const isInCart = (id) =>{
        //Chequear si existe un producto con el id elegido
    }

    const getQuantity = () =>{
        let quantity = 0;
        cart.forEach((product)=>{
          
          quantity += Number(product.quantity);
    
        });
        return quantity;
    };

    const value={ cart, addItem, removeItem, clear, isInCart, getQuantity };

    return <CartContext.Provider value={value}>{children} </CartContext.Provider>
};
export const useCart = () => {
    const context = React.useContext(CartContext);

    if(!context) {
        throw new Error ("useCart debe usarse desde adentro de un CartProvider")
    }
    return context;
};




