import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isFetchingUser, setIsFetchingUser] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isFetchingUser,
        setIsFetchingUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
