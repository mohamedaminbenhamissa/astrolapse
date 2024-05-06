import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "@/context";
import AuthRoutes from "./routes/AuthRoutes";
import MainRoutes from "./routes/MainRoutes";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


export default function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}> 
        <Routes>
          <Route path="auth/*" element={<AuthRoutes />} />
          <Route path="main/*" element={<MainRoutes />} />
        </Routes>
        </LocalizationProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
