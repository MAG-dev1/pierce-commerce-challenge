import { Children, useContext, useState } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductContext';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Filter from './Filter';


function ProductList({ search, setsearch, onAdd }) {
  const { products, error } = useContext(ProductContext);


  const [minvalue, setminvalue] = useState(0);
  const [maxvalue, setmaxvalue] = useState(1000);
  const [name, setname] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(false);
  const productsPerPage = 6;
  const [appliedFilters, setAppliedFilters] = useState({ min: 0, max: 1000, name: "" }); // evita que se renderize por si solo mientras se editan los input

  if (error) return <p>{error}</p>;



  useEffect(() => {

  }, [search, filter]);



  const filteredProducts = products.filter(p => {

    const matchesSearch = search ? p.title.toLowerCase().includes(search.toLowerCase()) : true;
    const matchesPrice = p.price >= appliedFilters.min && p.price <= appliedFilters.max;
    const matchesName = appliedFilters.name ? p.title.toLowerCase().includes(appliedFilters.name.toLowerCase()) : true;

    return matchesSearch && matchesPrice && matchesName;
  });


  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleFilterButton = () => {

    if (Number(minvalue) > Number(maxvalue)) {
      alert("El precio mínimo no puede ser mayor al máximo");
      return;
    }


    setAppliedFilters({
      min: Number(minvalue),
      max: Number(maxvalue),
      name: name
    });

    setCurrentPage(1);
    setFilter(!filter);



  }


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

        <span className="text-black text-center  mx-2">Página {currentPage} de {totalPages != 0? totalPages: 1}</span>





        <button

          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          ➡
        </button>


      </div>
      <button className='d-flex justify-content-center align-self-center' onClick={handleFilterButton}>Filtros</button>
      {!filter ? <></> :
        <Filter onClose={handleFilterButton} minvalue={minvalue} maxvalue={maxvalue} setminvalue={setminvalue} setmaxvalue={setmaxvalue} name={name} setname={setname} />
      }

      {/**
       * 
       * 
       *     <div className='contenedor_carrito'>
        {currentProducts.map(p => 
        p.title.toLowerCase().includes(search)?(
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ):null)}
      </div>

       * 
       * 
       * 
       * 
       */}

      <div className='contenedor_carrito'>
        {currentProducts.map(p => (<ProductCard key={p.id} product={p} onAdd={onAdd} />))}
      </div>

    </>
  );
}

export default ProductList;
