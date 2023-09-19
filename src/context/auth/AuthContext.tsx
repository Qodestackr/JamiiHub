import { createContext } from "react";

export const AuthContext = createContext(null);

function AuthContextProvider() {
  return <div>AuthContextProvider</div>;
}

export default AuthContextProvider;
