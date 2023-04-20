import React from 'react';
import {useState, useEffect} from 'react';

function Inicio(){
    const [products, setProducts] = useState(""); 

    const buscarProduct = () => {
        fetch("http://localhost:3000/api/product/allProducts")
        .then(response => (response.json()))
        .then(data => {
          setProducts(data.data[data.data.length-1])
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
        infProduct = 
            <div>
                <p>{products.name}</p><p> ({products.categoria_desc})</p><a href={products.detail} target="_blank">Ver</a>
                <div className='product-image__container'>
                <img src={products.image} alt='imagen'/>
                </div>
                <p>{products.description}</p>

            </div>
      }

    return (
        <React.Fragment>
            
            {infProduct}
            
        </React.Fragment>
    )
}
export default Inicio;