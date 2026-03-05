import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext.jsx';
import '../css/detailview.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Popup from '../components/Popup.jsx'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext.jsx';

function ProductDetail({id , isOpen, onClose, onAddProduct}) {
   const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const {products} = useContext(ProductContext);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log(products);
    let product = products.find(p => p.id === id);
    if(product){
      setProduct(product);
    }
    else{
      setProduct(null);
    }

  }, [id, products]);

  if (!product) return <p>Cargando...</p>;

  return (
    <>
      <Popup isOpen={isOpen} onClose={onClose}>
        <div className='elements_container'>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.price}$</p>
          <p>{product.seller}</p>
          <p>{product.description}</p>
          {!user.admin? <Link to="/ShoppingCart" onClick={onAddProduct}><button className='boton_pop'>Agregar al carrito</button></Link>: <></>}
        </div>
        
      </Popup>
    </>
  );
}


export default ProductDetail;
