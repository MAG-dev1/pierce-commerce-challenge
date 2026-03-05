import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import ShoppingCart from './pages/ShoppingCart';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/ShoppingCart', element: <ShoppingCart /> },
      { path: '/registro', element: <Register /> }
    ]
  }
]);

export default router;
