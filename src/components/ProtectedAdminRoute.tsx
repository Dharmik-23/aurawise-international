import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedAdminRouteProps {
  children?: React.ReactNode;
}

export const ProtectedAdminRoute: React.FC<ProtectedAdminRouteProps> = ({ children }) => {
  const isAdminLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedAdminRoute;
