import React, { createContext, useState, useContext, ReactNode } from "react";
import userData from "../utilisateurs.json";

// definir le type pour user
type User = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  nationality: string;
  country: string;
  region: string;
  dateOfBirth: string;
  adress: string;
  gender: string;
  email: string;
  postalCode: string;
  city: string;
  password: string;
  confirmPassword: string;
};

// type de context
interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: () => boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("currentUser") || "null")
  );

  const login = (email: string, password: string): boolean => {
    const user = userData.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  };

  const logout = (): void => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const isAuthenticated = (): boolean => {
    return currentUser !== null;
  };

  const value: AuthContextType = {
    currentUser,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
