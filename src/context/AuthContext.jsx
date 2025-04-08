import { createContext, useState, useContext } from "react";
import { registerRequest, loginRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // REGISTRO DE USUARIO
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res);
      console.log("Respuesta de register en context", res);
    } catch (error) {
      console.error(error);
    }
  };

  // LOGIN DE USUARIO
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res);
      console.log("Respuesta de login en context", res);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
