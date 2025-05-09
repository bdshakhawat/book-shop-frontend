import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { logout, useCurrentToken } from "../../Redux/Features/Auth/authSlice";
import { verifyToken } from "../../Utils/verifyToken";
import { persistor } from "../../Redux/store";

type TProtectedRoute = {
  children: ReactNode;
  role?: string | string[]; // Can be undefined, string, or array of strings
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const user = verifyToken(token); // Extract user info from token

  const isAuthorized = () => {
    if (!role) return true; // No role restriction
    if (Array.isArray(role)) {
      return role.includes(user?.role); // Accept multiple roles
    }
    return user?.role === role; // Accept single role
  };

  if (!isAuthorized()) {
    dispatch(logout());
    persistor.purge();
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
