import { createContext, useState } from "react";

// The actual value you access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// The provider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value} >{children}</UserContext.Provider>
};