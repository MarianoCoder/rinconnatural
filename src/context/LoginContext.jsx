import * as React from "react";



const LoginContext = React.createContext([]);

export const LoginProvider = ({children}) => {
    return <LoginContext.Provider value={"Este es el LoginContext"}>{children}</LoginContext.Provider>
};
export const useLogin = () =>{
    const context = React.useContext(LoginContext);

    if(!context) {
        throw new Error ("uselogin debe usarse desde adentro de un LoginProvider")
    }
    return context;
};
