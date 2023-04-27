import React from 'react';
import {useState, useEffect, useRef} from 'react';

function Totales(){
    const [products, setProducts] = useState(""); 
    const [categories, setCategories] = useState(""); 
    const [catTotal, setcatTotal] = useState("");
    const [users, setUsers] = useState("");

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
    const buscarUser = () => {
      fetch("http://localhost:3000/api/user/allUsers")
      .then(response => (response.json()))
      .then(data => {
        setUsers(data.meta.total)
      })
      .catch(error => {
        console.log(error)
      })
  }    
      
      useEffect(() => {
        console.log("Componente montado");
        buscarProduct();
        buscarUser();
      }, [])
      
      let infProduct;
      if(products === "") {
        infProduct = <div> Cargando... <p className='cargando-logo'></p></div>
      } else {
        infProduct = <div className='productos-totales'><h2>{products}</h2><div className='logo__container'><i className="fas fa-shopping-cart"></i><p>Productos</p></div></div>
      }
      let infUser;
      if(users === "") {
        infUser = <div> Cargando... <p className='cargando-logo'></p></div>
      } else {
        infUser = <div className='productos-totales'><h2>{users}</h2><div className='logo__container'><i className="fas fa-user-circle"></i><p>Usuarios</p></div></div>
      }
      
      let infCategory;
      if(categories === "") {
        infCategory = <div> Cargando... <p className='cargando-logo'></p></div>
      } else {
        let porcentaje;
        let catg = categories.map((cat, i)=>{
          porcentaje = (cat.total_productos * 100) / products;
          return <div>
                    <p className='productos-totales__categorias' key={i}> {cat.desc.toUpperCase()} ({cat.total_productos})</p>
                    <div className="categorias__progress">
                      <div className="categorias__progress-bar" style={{width: porcentaje + "%"}}>
                      </div>
                    </div>
                  </div>
        })
        infCategory = <div className='categorias-container'>{catg}</div>
      }

    return (
      <React.Fragment>
        <section className='productos-totales__container'>
        {infProduct}
        {infUser}
        </section>

        <div className="categorias-totales">
          <h2>Categorias ({catTotal}): </h2>
          {infCategory}
        </div>
      </React.Fragment>
    );
}
export default Totales;