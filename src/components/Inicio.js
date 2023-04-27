import React from 'react';
import {useState, useEffect} from 'react';

function Inicio(){
    const [products, setProducts] = useState(""); 
    const [user, setUser] = useState(""); 

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

      const buscarUser = () => {
        fetch("http://localhost:3000/api/user/allUsers")
        .then(response => (response.json()))
        .then(data => {
          setUser(data.data[data.data.length - 1])
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
        infProduct = <div className='cargando__container'>Cargando.. 
          <p className='cargando-logo'></p> </div>
      } else {
        infProduct = 
            <div className='ultimo-producto__container'>
                <h2>Último producto agregado</h2>
                <div className='ultimo-producto__info'>
                <p>{products.name} ({products.categoria_desc})</p><a href={products.detail} target="_blank">Ver</a>
                </div>
                <div className='product-image__container'>
                <img src={products.image} alt='imagen'/>
                </div>
                <p>{products.description}</p>

            </div>
      }

      let infUser;
      if(user === "") {
        infUser = <div> Cargando... <p className='cargando-logo'></p></div>
      } else {
        infUser = <div className='ultimo-usuario'>
          <div> 
            <h2>Nuevo usuario   </h2>
            <p >{user.firstName.toUpperCase()} {user.lastName.toUpperCase()} </p>
          </div>
          <div className='ultimo-usuario__img-container'><img  src={user.imageProfile} ></img></div>
        </div>
      }

    return (
        <React.Fragment>
            
            {infProduct}
            {infUser}
        </React.Fragment>
    )
}
export default Inicio;