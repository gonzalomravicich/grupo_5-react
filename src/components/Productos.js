import React from 'react';

import {useState, useEffect} from 'react';


    
function Productos(){
    const [products, setProducts] = useState(""); 

    const buscarProducts = () => {
        fetch("http://localhost:3000/api/product/allProducts")
        .then(response => (response.json()))
        .then(data => {
          setProducts(data.data)
        })
        .catch(error => {
          console.log(error)
        })
      }

      useEffect(() => {
        console.log("Componente montado");
        buscarProducts();
      }, [])

let infProducts;

      if(products === "") {
        infProducts = <div className='cargando__container'>Cargando.. 
          <p className='cargando-logo'></p> </div>
      } else{
        
       let product1 = products.map((product, i) =>{
        return<tr key={i} className='fila__producto'> 
            <td><div className='image-product__container'><img  src={product.image} ></img></div> </td>
            <td >{product.name.toUpperCase()} </td>
            <td >{product.categoria_desc.toUpperCase()} </td>
            <td ><a href={product.detail} target='_blank'>Ver</a></td>
        </tr>
      
       })
       infProducts = <div className='lista-productos__container'><h2>Productos</h2> {product1}</div>
      }

// console.log(users);

    return (
        <React.Fragment>
           {infProducts}
        </React.Fragment>
    )
}
export default Productos;