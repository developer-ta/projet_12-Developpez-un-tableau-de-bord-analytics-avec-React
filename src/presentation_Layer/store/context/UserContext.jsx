import { createContext, useContext } from "react";

const UserAllDataContext = createContext();

export const UserContextProvider = ({ value, children }) => {
  return (
    <UserAllDataContext.Provider value={value}>
      {children}
    </UserAllDataContext.Provider>
  );
};

export const useUserDataContext = () => {
  const userData = useContext(UserAllDataContext);
  return userData;
};
