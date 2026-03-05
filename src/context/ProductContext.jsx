// ProductContext.jsx
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://69a9b3b132e2d46caf471891.mockapi.io/products')
      .then(res => res.json())
      .then(data => {
        const updatedProducts = data.map(p => ({ ...p, count: 0 }));
        setProducts(updatedProducts);
      })
      .catch(() => setError('Error loading products'));
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, error }}>
      {children}
    </ProductContext.Provider>
  );
}
