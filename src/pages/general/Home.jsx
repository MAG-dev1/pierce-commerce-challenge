import ProductList from '../../components/ProductList.jsx';
import Cart from '../../components/Cart.jsx';
import { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import { UserContext } from '../../context/UserContext.jsx';
import { useContext } from 'react';
import { useCarrito } from '../../context/CarritoContext.jsx';
import Footer from '../../components/Footer.jsx';
function Home() {
  const [products, setProducts] = useState([]);
  const {carrito, agregarProducto, vaciarCarrito} = useCarrito(); 
  const [search, setSearch] = useState('');

  const handleAddToCart = (product) => {
    agregarProducto(product);
    console.log(carrito);
  };

  return (
    
    <div className="d-flex flex-column min-vh-100">
      <Navbar search={search} setSearch={setSearch}/>
      <ProductList search={search} setsearch={setSearch}  onAdd={handleAddToCart} />
      <Footer/>
    </div>
  );
}

export default Home;
