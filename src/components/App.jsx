import React from 'react';
import SideBar from './SideBar';
import "../assets/css/App.css";
import logo from "../assets/images/Logo.png"
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <header>
            <div className='logo-container'> 
              <img src={logo} alt="logo" />
            </div>
          </header>
          <SideBar />
          <footer>
              <article className="section__contacto">
                <h4>Contacto: </h4>
                <a href="">Preguntas Frecuentes</a>
                <a href="">Terminos y condiciones</a>
                <a href="">Nosotros</a>
              </article>
              <p className="footer__copiright">
                GLEMS SRL © 2022. Todos los Derechos Reservados.
              </p>
          </footer>
        </div>
    </React.Fragment>
  );
}

export default App;
