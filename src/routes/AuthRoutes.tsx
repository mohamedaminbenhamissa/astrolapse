import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ProtectedRoute from "@/ProtectedRoutes";

const AuthRoutes = () => {
  return (
    <Routes>
       <Route element={<ProtectedRoute />}>
      <Route path="signin" element={<LoginPage />} />
      <Route path="signup" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
