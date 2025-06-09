import { Navigate } from 'react-router-dom';

// ProtectedRoute component to handle authentication and authorization
const ProtectedRoute = ({ children }) => {
  // Get user data from localStorage
  const userData = JSON.parse(localStorage.getItem('user'));
  
  // Check if user exists and is admin
  if (!userData) {
    return <Navigate to="/login" replace />;
  }
  
  if (!userData.isAdmin) {
    return <Navigate to="/" replace />;
  }
  
  // If user is admin, render the protected content
  return children;
};

export default ProtectedRoute; 