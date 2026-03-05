import { useState } from "react";
import Navbar  from "../../components/Navbar";
import '../../css/createProduct.css';
import { ProductService } from '../../core/ProductService'
import { Product } from "../../core/Product";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { ButtonForm } from '../../styledComponents/StyledComponents.js';


export default function ProductCreate() {
  const [seller, setSeller] = useState('');
  const [precio, setPrecio] = useState('');
  const [titulo, setTitulo] = useState('');
  const [imagen, setImagen] = useState('');
  const [descripcion, setDescripcion] = useState('');
    const service = new ProductService();

    const createProductHandle = (e) =>{
        e.preventDefault();
        try {
            let product = new Product(seller, precio, titulo, imagen, descripcion);
            service.post(product);
        } catch (error) {
            toast.error('Error al crear el producto: ' + error.message);
            return;
          
        }
     
    }

  return (
    <>
      <Navbar />
      <h2>Crear producto</h2>
      <form className="form">
        <div>
        <label>Vendedor:</label>
        <input
          type="text"
          value={seller}
          onChange={(e) => setSeller(e.target.value)}
          required
          placeholder="Nombre del vendedor"
        />

        <label>Precio:</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
          placeholder="Precio del producto"
        />

        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          placeholder="Título del producto"
        />

        <label>Imagen (URL):</label>
        <input
          type="text"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          required
          placeholder="URL de la imagen"
        />

        <label>Descripción:</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
          placeholder="Descripción del producto"
          rows="4"
        />

        <ButtonForm onClick={createProductHandle}>Crear Producto</ButtonForm>
        </div>
     
      </form>
      <ToastContainer position="bottom-right" />
    
    </>
  );
}

