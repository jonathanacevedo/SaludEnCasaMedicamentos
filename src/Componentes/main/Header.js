import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../estilos/Header.css';
import { Link } from 'react-router-dom';

import Logo from  '../imagenes/logo2.png'; 
import LoginLogo from  '../imagenes/login.png'; 

/*          <ul className="menu">
{items && items.map((item, key)=> <li key={key}><strong>{item.texto}</strong></li>)}
</ul>  */


class Header extends Component {


  constructor(){
    super();

    this.state={
      count: 0
    }

    this.handleMensaje = this.handleMensaje.bind(this);
  }

  static propTypes = {
    titulo: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };


  handleMensaje(e){
    if(e.target.id === "comprar"){
      this.setState({
        count: this.state.count +1
      });
    }
  }

  render() {
    const { titulo, items } = this.props;  //const titulo = this.props.titulo;
    return (
      <div className="App">
        <header className="Header">
          <ul className="linea">
          <img src={LoginLogo} className="loginLogo"></img>
          <a>Iniciar Sesión</a>
          </ul>
          <table align="center">
            <tbody>
              <tr>
              <th><img src={Logo} className="logo"></img></th>
              <th><h1 className="titulo">Salud en Casa</h1><a className="subtitulo">Venta de Medicamentos</a></th>
              </tr>
            </tbody>
          </table>
          <ul className="menu">
          <Link to={'/'}><li><button id="principal" className="boton sobre">Principal</button></li></Link>
          <Link to={'/comprar'}><li><button id="comprar" className="boton sobre"> Comprar </button></li></Link>
          <Link to={'/consultar'}> <li><button id="consultar" className="boton sobre"> Consultar </button></li></Link>
          <Link to={'/contacto'}> <li><button id="contacto" className="boton sobre"> Contacto </button></li></Link>
           </ul>
        </header>
      </div>
    );
  }
}


export default Header;