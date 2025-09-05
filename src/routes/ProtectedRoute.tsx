/* eslint-disable @typescript-eslint/no-explicit-any */
// src/routes/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux"; // ধরো তুমি redux এ auth রাখছো

const ProtectedRoute = () => {
  const user = useSelector((state: any) => state.auth.user); // তোমার store অনুযায়ী বদলাও

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
