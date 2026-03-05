import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import Login from './pages/Login';
import ShoppingCart from './pages/ShoppingCart';
import './css/app.css'
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import { UserProvider } from './context/UserContext';
import { CarritoProvider } from './context/CarritoContext';
import { ProductProvider } from './context/ProductContext';

import ProductManagment from './pages/admin/ProductManagment';
import ProductCreate from './pages/admin/ProductCreate';
import ProductDelete from './pages/admin/ProductDelete';
import ProductEdit from './pages/admin/ProductEdit';
function App() {
  return (
    <>
      <UserProvider>
        <CarritoProvider>
          <ProductProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/home" element={
                
                <Home />
              
              } />

              <Route path="/ShoppingCart" element={<ShoppingCart />} />
              <Route path="/managment" element={
                <ProtectedRoute>
                  <ProductManagment />
                </ProtectedRoute>
              } />
              <Route path="/create" element={
                <ProtectedRoute>
                  <ProductCreate />
                </ProtectedRoute>
              } />
              <Route path="/delete" element={
                <ProtectedRoute>
                  <ProductDelete />
                </ProtectedRoute>
              } />

              <Route path="/edit" element={
                <ProtectedRoute>
                  <ProductEdit />
                </ProtectedRoute>
              } />

              <Route path="*" element={<Login />} />

            </Routes>
          </ProductProvider>
        </CarritoProvider>
      </UserProvider>

    </>
  );
}

export default App;
