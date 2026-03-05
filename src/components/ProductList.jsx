import { useContext, useState } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductContext';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
function ProductList({ search, onAdd }) {
  const { products, error } = useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; 
  if (error) return <p>{error}</p>;

  const filteredProducts = products.filter(p => {
    if (search && search !== "") {
      return p.title.toLowerCase().includes(search);
    }
    return true;
  });

  useEffect(() => {
    setCurrentPage(1);
    console.log(search);
    
  }, [search]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <>
       <Helmet>
        <title>Productos | Mi Tienda</title>
        <meta name="description" content="Compra los mejores productos al mejor precio." />
      </Helmet>
      <div className="d-flex justify-content-center align-items-center my-3 align-self-center ">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ⬅
        </button>

        <span className="text-black text-center  mx-2">Página {currentPage} de {totalPages}</span>

        <button

          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          ➡
        </button>
      </div>
      <div className='contenedor_carrito'>
        {currentProducts.map(p => 
        p.title.toLowerCase().includes(search)?(
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ):null)}
      </div>


    </>
  );
}

export default ProductList;
