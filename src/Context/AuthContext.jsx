import { createContext,useReducer } from "react";
import Alert from "./Alert";


export const AuthContext = createContext();

const initialState={
  token: "",
  error: false,
  auth: false,
  alert: false,
}

const AuthContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Alert, initialState);

  return <AuthContext.Provider value={{state, dispatch}}>{children}</AuthContext.Provider>;
};

export {AuthContextProvider};
