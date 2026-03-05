import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import { useCarrito } from '../context/CarritoContext.jsx';
import SearchBar from './SearchBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar({ search, setSearch }) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { carrito, vaciarCarrito } = useCarrito();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    vaciarCarrito();
    navigate('/login');
  };

  const closeNavbar = () => {
  const navbarToggler = document.querySelector('.navbar-collapse');
  if (navbarToggler.classList.contains('show')) {
    navbarToggler.classList.remove('show');
  }
};


  return (
    <nav className="navbar navbar-expand-lg navbar-black">
      <div className="container-fluid d-flex justify-content-between">
        
        <span className="navbar-text me-4 bg-white text-dark rounded-pill px-3">
          {user?.username || 'Invitado'}
        </span>

        <button className="navbar-toggler border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" onClick={closeNavbar}>
          <span className="navbar-toggler-icon background-white"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-1 gap-2 mt-2 ">
            
            <li className="nav-item">
              <Link to="/home" className="nav-link m-0 custom-link">Inicio</Link>
            </li>

            {user && user.admin ? (
              <li className="nav-item">
                <Link to="/managment" className="nav-link m-0 custom-link">Gestión</Link>
              </li>
            ) : (
              <>
                <li className="nav-item ">
                  <Link to="/ShoppingCart" className="nav-link m-0 custom-link">Carrito</Link>
                </li>
              </>
            )}
          </ul>
      
          <SearchBar  search={search} setSearch={setSearch} /> 
          <button className="btn btn-outline-danger button-navbar m-2" onClick={handleLogout}>Cerrar sesión</button>
        </div>
     
      </div>
    </nav>
  );
}

export default Navbar;
