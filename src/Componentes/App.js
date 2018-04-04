import React, { Component } from 'react';
import './estilos/App.css';
import items from './datos/menu.js'; 
import PropTypes from 'prop-types';

/* <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1> */

//Componentes
<<<<<<< HEAD
import Header from './main/Header1.js';
=======
import Header from './main/Header.js';
>>>>>>> 10cc263e39c0c884f1b8a3cfbcfd0a69b519fba3
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


<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 10cc263e39c0c884f1b8a3cfbcfd0a69b519fba3
