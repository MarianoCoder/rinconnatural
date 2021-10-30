import * as React from "react";



const LoginContext = React.createContext([]);
LoginContext.displayName = "LoginContext";

export const LoginProvider = ({children}) => {
    const [login, setLogin] = React.useState([]);

    const addUser = (user) =>{
        const newUser = {user};

        setLogin(newUser);
    };

        const value = {login, addUser}

    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
};
export const useLogin = () =>{
    const context = React.useContext(LoginContext);

    if(!context) {
        throw new Error ("uselogin debe usarse desde adentro de un LoginProvider")
    }
    return context;
};
