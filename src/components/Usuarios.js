import React from 'react';

import {useState, useEffect} from 'react';


    
function Usuarios(){
    const [users, setUsers] = useState(""); 

    const buscarUsers = () => {
        fetch("http://localhost:3000/api/user/allUsers")
        .then(response => (response.json()))
        .then(data => {
          setUsers(data.data)
        })
        .catch(error => {
          console.log(error)
        })
      }

      useEffect(() => {
        console.log("Componente montado");
        buscarUsers();
      }, [])

let infUsers;

      if(users === "") {
        infUsers = <div className='cargando__container'>Cargando.. 
          <p className='cargando-logo'></p> </div>
      } else{
        
       let user1 = users.map((user, i) =>{
        return<tr key={i} className='fila__usuario'> 
            <td><div className='image-profile__container'><img  src={user.imageProfile} ></img></div> </td>
            <td >{user.firstName.toUpperCase()} </td>
            <td >{user.lastName.toUpperCase()} </td>
            <td >{user.email}</td>
        </tr>
      
       })
       infUsers = <div className='lista-usuarios__container'><h2>Usuarios</h2> {user1}</div>
      }

// console.log(users);

    return (
        <React.Fragment>
           {infUsers}
        </React.Fragment>
    )
}
export default Usuarios;