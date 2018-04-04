import React, { Component } from 'react';
import '../estilos/Footer.css';
import LogoFooter from '../imagenes/footerLogo.png';

<<<<<<< HEAD
import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';

=======
>>>>>>> 10cc263e39c0c884f1b8a3cfbcfd0a69b519fba3
/* <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1> */

class Footer extends Component {

  render() {
    return (
<<<<<<< HEAD
      <div>
      <PhoneBreakpoint>
=======
>>>>>>> 10cc263e39c0c884f1b8a3cfbcfd0a69b519fba3
      <div className="App">
        <div className="Footer">
            <p>Aplicación Web para el curso de Ingeniería Web - Salud en casa</p>
            <p>Dedicada a mi novia, la más hermosa</p>
            <p>Contacto: Jonathan Payares Acevedo</p>
            <img src={LogoFooter} className="footerLogo" ></img>
        </div>
      </div>
<<<<<<< HEAD
      </PhoneBreakpoint>
      

       
      <DesktopBreakpoint>
      <div className="App">
        <div className="Footer">
            <p>Aplicación Web para el curso de Ingeniería Web - Salud en casa</p>
            <p>Dedicada a mi novia, la más hermosa</p>
            <p>Contacto: Jonathan Payares Acevedo</p>
            <img src={LogoFooter} className="footerLogo" ></img>
        </div>
      </div>
      </DesktopBreakpoint>
      

       
      <TabletBreakpoint>
      <div className="App">
        <div className="Footer">
            <p>Aplicación Web para el curso de Ingeniería Web - Salud en casa</p>
            <p>Dedicada a mi novia, la más hermosa</p>
            <p>Contacto: Jonathan Payares Acevedo</p>
            <img src={LogoFooter} className="footerLogo" ></img>
        </div>
      </div>
      </TabletBreakpoint>
      </div>

=======
>>>>>>> 10cc263e39c0c884f1b8a3cfbcfd0a69b519fba3
    );
  }
}
export default Footer;