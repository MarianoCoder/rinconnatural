import * as React from "react";

const UserContext = React.createContext(null);
export default UserContext;

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({});

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error("useUser debe usarse desde adentro de un UserProvider");
  }
  return context;
};
