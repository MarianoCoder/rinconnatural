import * as React from "react";

const UserContext = React.createContext ("");
export default UserContext;

export const CartProvider = () =>{

    return <UserContext.Provider></UserContext.Provider>;
}