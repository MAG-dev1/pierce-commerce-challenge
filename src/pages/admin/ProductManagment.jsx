import Navbar  from "../../components/Navbar";
import { Link } from 'react-router-dom';
import '../../css/ProductManagment.css'
import Footer from "../../components/Footer";
export default function ProductManagment() {
    return (
        <>
            <Navbar/>
            <div className="managment_container">
                <div className="managment_container_buttons">
                    <Link to={'/create'}><button>Crear producto</button></Link>
                    <Link to={'/delete'}><button>Borrar Producto</button></Link>
                    <Link to={'/edit'}><button>Editar producto</button></Link>   
                </div>
                <img src="https://i1.wp.com/sonria.com/wp-content/uploads/2019/09/gestion-de-producto.jpg?fit=1024%2C614&ssl=1" alt="" className="imagen_gestion" />
            </div>
         
              
        </>
    );
}