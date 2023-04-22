import React from 'react';
import {useState, useEffect} from 'react';
function Totales(){
    const [products, setProducts] = useState(""); 
    const [categories, setCategories] = useState(""); 
    const [catTotal, setcatTotal] = useState("");
   
    
    
    const buscarProduct = () => {
        fetch("http://localhost:3000/api/product/allProducts")
        .then(response => (response.json()))
        .then(data => {
          setProducts(data.meta.total)
          setCategories(data.meta.countCategory)
          setcatTotal(data.meta.countCategory.length)
        })
        .catch(error => {
          console.log(error)
        })
      }

      useEffect(() => {
        console.log("Componente montado");
        buscarProduct();
      }, [])
      
      let infProduct;
      if(products === "") {
        infProduct = <p> Cargando... </p>
      } else {
        infProduct = <h2> Productos Totales : {products}</h2>
      }
      
      let infCategory;
      if(categories === "") {
        infCategory = <p> Cargando... </p>
      } else {
        let catg = categories.map((cat, i)=>{
          return <p key={i}> {cat.desc.toUpperCase()} ({cat.total_productos})</p>
        })
        infCategory = <div className='categorias-container'>{catg}</div>
      }

    return (
      <React.Fragment>
        <div className='productos-totales'>{infProduct}</div>

        <div className="categorias-totales">
          <h2>Categorias ({catTotal}): </h2>
          {infCategory}
        </div>
      </React.Fragment>
    );
}
export default Totales;