import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    // Se o token não existir, redirecione para a página de login
    return <Navigate to={`/login${window.location.pathname}`} />;
  }
  // Se o token existir, renderize o componente filho
  return children;
};

export default ProtectedRoute;
