import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);

  if (login) {
    return children;
  } else if (login === false) {
    <Navigate to="/login" />;
  } else {
    <></>;
  }
};

export default ProtectedRoute;
