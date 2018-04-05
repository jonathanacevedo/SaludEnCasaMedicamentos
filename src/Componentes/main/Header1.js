import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../estilos/Header.css';
import { Link } from 'react-router-dom';

import Logo from  '../imagenes/logo2.png'; 
import LoginLogo from  '../imagenes/login.png'; 
import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';
import ResponsiveMenu from 'react-responsive-navbar';
/*          <ul className="menu">
{items && items.map((item, key)=> <li key={key}><strong>{item.texto}</strong></li>)}
</ul>  */


class Header1 extends Component {


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
      <div>
      <PhoneBreakpoint>
      <div className="App">
        <header className="Header">
          <ul className="lineaPhone">
          <img src={LoginLogo} className="loginLogoPhone"></img>
          
          <a>Iniciar Sesión</a>
          </ul>
          <table align="center">
            <tbody>
              <tr>
              <th><img src={Logo} className="logoPhone"></img></th>
              <th><h1 className="titulo">Salud en Casa</h1><a className="subtitulo">Venta de Medicamentos</a></th>
              </tr>
            </tbody>
          </table>
          <ul className="menuPhone">
         
          <Link to={'/'}><li><button id="principal" className="boton sobre">Principal</button></li></Link>
          <Link to={'/comprar'}><li><button id="comprar" className="boton sobre"> Comprar </button></li></Link>
          <Link to={'/consultar'}> <li><button id="consultar" className="boton sobre"> Consultar </button></li></Link>
          <Link to={'/contacto'}> <li><button id="contacto" className="boton sobre"> Contacto </button></li></Link>
   
           </ul>
        </header>
      </div>
      </PhoneBreakpoint>

      <DesktopBreakpoint>
      <div className="App">
        <header className="Header">
          <ul className="lineaDesk">
          
          <img src={LoginLogo} className="loginLogoDesk"></img>
          <a>Iniciar Sesión</a>
          </ul>
          <table align="center">
            <tbody>
              <tr>
              <th><img src={Logo} className="logoDesk"></img></th>
              <th><h1 className="titulo">Salud en Casa</h1><a className="subtitulo">Venta de Medicamentos</a></th>
              </tr>
            </tbody>
          </table>
          <ul className="menuDesk">
         
          <Link to={'/'}><li><button id="principal" className="boton sobre">Principal</button></li></Link>
          <Link to={'/comprar'}><li><button id="comprar" className="boton sobre"> Comprar </button></li></Link>
          <Link to={'/consultar'}> <li><button id="consultar" className="boton sobre"> Consultar </button></li></Link>
          <Link to={'/contacto'}> <li><button id="contacto" className="boton sobre"> Contacto </button></li></Link>
   
           </ul>
        </header>
      </div>
      </DesktopBreakpoint>

      <TabletBreakpoint>
      <div className="App">
        <header className="Header">
          <ul className="lineaTablet">
          <img src={LoginLogo} className="loginLogoTablet"></img>
          <a>Iniciar Sesión</a>
          </ul>
          <table align="center">
            <tbody>
              <tr>
              <th><img src={Logo} className="logoTablet"></img></th>
              <th><h1 className="titulo">Salud en Casa</h1><a className="subtitulo">Venta de Medicamentos</a></th>
              </tr>
            </tbody>
          </table>
           
          <ul className="menuTablet">
        
          <Link to={'/'}><li><button id="principal" className="boton sobre">Principal</button></li></Link>
          <Link to={'/comprar'}><li><button id="comprar" className="boton sobre"> Comprar </button></li></Link>
          <Link to={'/consultar'}> <li><button id="consultar" className="boton sobre"> Consultar </button></li></Link>
          <Link to={'/contacto'}> <li><button id="contacto" className="boton sobre"> Contacto </button></li></Link>
          
           </ul>
         
         />
        </header>
      </div>
      </TabletBreakpoint>

      </div>
    );
  }
}


export default Header1;