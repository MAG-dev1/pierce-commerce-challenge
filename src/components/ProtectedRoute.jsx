import { Navigate } from 'react-router-dom';


function ProtectedRoute({ children }) {
  const loggedIn = !!localStorage.getItem('user');
  return loggedIn ? children : <Navigate to="/login" />;
}

// Simulamos un login con estado local
const isAuthenticated = () => {
  return !!localStorage.getItem('user'); // por ejemplo, guardás algo en login
};


export default ProtectedRoute;
