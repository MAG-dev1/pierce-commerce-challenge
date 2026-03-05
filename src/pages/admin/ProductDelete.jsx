import { useState } from "react";
import Navbar  from "../../components/Navbar";
import { ProductService } from '../../core/ProductService'
import '../../css/deleteProduct.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { ButtonForm } from '../../styledComponents/StyledComponents.js';

export default function ProductCreate(){
    const [id, setId] = useState('');
    const service = new ProductService();

    const deleteProductHandle = async (e) => {
        e.preventDefault();
        await service.delete(id)
        .then(() => {
            toast.success('Producto eliminado correctamente');
        })
        .catch((error) => {
            toast.error('Error al eliminar el producto: ' + error.message);
        });
       
          
    }

    return(
        <>
    
            <Navbar/>
           
            <form className="form_delete">
                <div className="container_delete">
                    <label>Borrar Producto</label>
                        <input
                            type="text"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="id del producto"
                            required
                        />
                    <ButtonForm onClick={deleteProductHandle}>Borrar Producto</ButtonForm>
                </div>
            </form>
            <ToastContainer position="bottom-right" />
            
        
        </>
    );
}