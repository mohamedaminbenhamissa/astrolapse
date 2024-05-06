import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../src/context/AuthContext";
import Sidebar from "./components/Sidebar";



interface AuthContextType {
 currentUser: any; 
 isAuthenticated: () => boolean;
}


interface ProtectedRouteProps {
 element?: React.ReactElement; 
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, ...props }) => {
 const { currentUser, isAuthenticated } = useAuth() as AuthContextType;
 const location = useLocation();

 const startsWith = (path: string, start: string): boolean => {
    return path.slice(0, start.length) === start;
 };

 if (currentUser && isAuthenticated()) {
    if (startsWith(location.pathname, "/auth")) {
      return <Navigate to="/main" replace />;
    }

    return (
      <Sidebar>
        <Outlet />
      </Sidebar>
    );
 } else {
    if (startsWith(location.pathname, "/main")) {
      return <Navigate to="/auth" replace />;
    }

    return (
      <Outlet />
    );
 }
};

export default ProtectedRoute;