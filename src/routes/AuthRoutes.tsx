import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="signin" element={<LoginPage />} />
      <Route path="signup" element={<RegisterPage />} />
    </Routes>
  );
};

export default AuthRoutes;
