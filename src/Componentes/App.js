import React, { Component } from 'react';
import './estilos/App.css';
import items from './datos/menu.js'; 
import PropTypes from 'prop-types';

/* <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1> */

//Componentes
import Header from './main/Header1.js';
import Body from './main/Body.js';
import Fondo from './main/Fondo.js';
import Footer from './main/Footer.js';
import Background from './imagenes/fondo1.jpg';

/*var sectionStyle = {
  width: "100%",
  margin: "0",
  height: "400px",
  backgroundImage: "url(" + Background + ")"
};*/

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    
    return (
      <div className="App">
          <Header titulo="Principal" items={items} />
          <Body body={children} />
          <Footer />
      </div>
    );
  }
}



export default App;
