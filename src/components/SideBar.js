import React from 'react';
import {Link, Route, Routes, Switch} from "react-router-dom"


import Inicio from "../components/Inicio"
import Productos from "../components/Productos"
import Usuarios from "../components/Usuarios"
import Categorias from "../components/Categorias"
import Totales from "../components/Totales"

// cambiar formato del router
    function SideBar(){
        return (
          <React.Fragment>
          
            <main className='main-container'>
            <section>
              <ul className="SideBar__NavSup">
              <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="productos">Productos</Link>
                </li>
                <li>
                  <Link to="usuarios">Usuarios</Link>
                </li>
                <li>
                  <Link to="categorias">Categorias</Link>
                </li>
              </ul>
             
            </section>
            <div className='main__routes'>
              <section className='routes-container'>
              <Routes>
                  <Route exact path='/' element= {<Inicio/>} />
                  <Route  path='/productos' element = {<Productos/>} />
                  <Route path='/usuarios'  element={<Usuarios/>} />
                  <Route  path='/categorias' element= {<Categorias/>} />
                  {/* <Route  path='*' element={<Error404/>}/> */}
              </Routes>
              </section>
              <section className='totales-container'>
                <Totales/>
              </section>
            </div>
            </main>
            
          </React.Fragment>
        );
    }

export default SideBar;