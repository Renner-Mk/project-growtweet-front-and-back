import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from "../pages/Login";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
