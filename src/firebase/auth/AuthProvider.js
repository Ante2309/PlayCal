import React, { createContext, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase"; // Putanja do vaše Firebase konfiguracije

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Koristimo useAuthState za upravljanje korisničkim stanjem
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>; // Prikazujemo "Loading..." dok se provjerava stanje prijave
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Prikazujemo grešku ako se pojavi
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
