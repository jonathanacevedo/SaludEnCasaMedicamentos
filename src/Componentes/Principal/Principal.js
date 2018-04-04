import React, { Component } from 'react';
import Banner from '../imagenes/farmacia1.png';
import icono1 from '../imagenes/icono1.png';
import icono2 from '../imagenes/icono2.png';
import icono3 from '../imagenes/icono3.png';
<<<<<<< HEAD
import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';

=======
>>>>>>> 10cc263e39c0c884f1b8a3cfbcfd0a69b519fba3

import './principal.css';


class Principal extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
      <PhoneBreakpoint>
 <div className="App">
          <img src={Banner} className="banner"></img>
          <div className="tabla">
        <table align="center">
          <tbody>
            <tr>
              <th>
                <div className="container1Phone">

   
                
<img src={icono1} minWidth={0}  className="icono"></img>

                <p className="textoContainer">Productos de la más alta calidad </p>
                </div>
              </th>
              <th>
                <div className="container2Phone">
                <img src={icono2} className="icono"></img>
                <p className="textoContainer">Servicio de domicilio</p>
                </div>
              </th>
              <th>
                <div className="container3Phone">
                <img src={icono3} className="icono"></img>
                <p className="textoContainer">En cualquier momento del día</p>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        </div>

      </div>
      </PhoneBreakpoint>
      

      
      <TabletBreakpoint>
 <div className="App">
          <img src={Banner} className="banner"></img>
          <div className="tabla">
        <table align="center">
          <tbody>
            <tr>
              <th>
                <div className="container1Tablet">
                
                
                <img src={icono1} className="icono"></img>
                


                <p className="textoContainer">Productos de la más alta calidad </p>
                </div>
              </th>
              <th>
                <div className="container2Tablet">
                <img src={icono2} className="icono"></img>
                <p className="textoContainer">Servicio de domicilio</p>
                </div>
              </th>
              <th>
                <div className="container3Tablet">
                <img src={icono3} className="icono"></img>
                <p className="textoContainer">En cualquier momento del día</p>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        </div>

      </div>
      </TabletBreakpoint>


      <DesktopBreakpoint>
 <div className="App">
=======
      <div className="App">
>>>>>>> 10cc263e39c0c884f1b8a3cfbcfd0a69b519fba3
          <img src={Banner} className="banner"></img>
          <div className="tabla">
        <table align="center">
          <tbody>
            <tr>
              <th>
<<<<<<< HEAD
                <div className="container1Desk">
                
                
                <img src={icono1} className="icono"></img>
                


=======
                <div className="container1">
                <img src={icono1} className="icono"></img>
>>>>>>> 10cc263e39c0c884f1b8a3cfbcfd0a69b519fba3
                <p className="textoContainer">Productos de la más alta calidad </p>
                </div>
              </th>
              <th>
<<<<<<< HEAD
                <div className="container2Desk">
=======
                <div className="container2">
>>>>>>> 10cc263e39c0c884f1b8a3cfbcfd0a69b519fba3
                <img src={icono2} className="icono"></img>
                <p className="textoContainer">Servicio de domicilio</p>
                </div>
              </th>
              <th>
<<<<<<< HEAD
                <div className="container3Desk">
=======
                <div className="container3">
>>>>>>> 10cc263e39c0c884f1b8a3cfbcfd0a69b519fba3
                <img src={icono3} className="icono"></img>
                <p className="textoContainer">En cualquier momento del día</p>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        </div>
<<<<<<< HEAD

      </div>
      </DesktopBreakpoint>
      

      </div>


=======
      </div>
      
>>>>>>> 10cc263e39c0c884f1b8a3cfbcfd0a69b519fba3
    );
  }
}


<<<<<<< HEAD
export default Principal;
=======
export default Principal;
>>>>>>> 10cc263e39c0c884f1b8a3cfbcfd0a69b519fba3
