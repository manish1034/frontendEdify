/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, createContext, useContext } from "react";
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const storedJWT = localStorage.getItem("jwt");

    if (storedJWT) {
      const decodedUserData = jwt_decode(storedJWT);
      setUserData(decodedUserData.userData);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};