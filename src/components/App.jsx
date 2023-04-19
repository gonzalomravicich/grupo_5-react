import React from 'react';
import SideBar from './SideBar';
import "../assets/css/App.css";

import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
        </div>
    </React.Fragment>
  );
}

export default App;
