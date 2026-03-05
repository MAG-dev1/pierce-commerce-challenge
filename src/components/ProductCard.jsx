import { Link } from 'react-router-dom';
import '../css/products.css'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import { useState } from 'react';
import ProductDetail from './ProductDetail.jsx';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product, onAdd }) {
  const { user, setUser } = useContext(UserContext);
  const [detailProductOpen, setOpen] = useState(false);

const detailedOpen = () => {
  setOpen(!detailProductOpen);
}

  return (

      <div className='card'>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title}/>
        <p>${product.price}</p>

        {!user.admin && 
          <button onClick={() => onAdd(product)} className="boton">Agregar al carrito</button>
        }
        
        

        {!detailProductOpen ?  
          <button className='boton' onClick={detailedOpen}>Ver detalle</button>
         : <ProductDetail id={product.id} onAddProduct={() => onAdd(product)} isOpen={detailProductOpen} onClose={() => setOpen(false)} />
         }

         
       
      </div>
     
    
  );
}

export default ProductCard;
