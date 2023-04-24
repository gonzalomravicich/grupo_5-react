import React from 'react';
import {useState, useEffect, useRef} from 'react';
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
        infProduct = <div> Cargando... <p className='cargando-logo'></p></div>
      } else {
        infProduct = <h2> Productos Totales : {products}</h2>
      }
      
      let infCategory;
      if(categories === "") {
        infCategory = <div> Cargando... <p className='cargando-logo'></p></div>
      } else {
        let porcentaje;
        let catg = categories.map((cat, i)=>{
          porcentaje = (cat.total_productos * 100) / catTotal;
          return <div>
                    <p className='productos-totales__categorias' key={i}> {cat.desc.toUpperCase()} ({cat.total_productos})</p>
                    <div class="categorias__progress">
                      <div class="categorias__progress-bar" style={{width: porcentaje + "%"}}>
                      </div>
                    </div>
                  </div>
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