import { createContext, useContext } from "react";
import useAuth from "../Hooks/useAuth";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
