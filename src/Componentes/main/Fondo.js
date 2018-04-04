import React, { Component } from 'react';
import '../estilos/Body.css';
import Background from '../imagenes/fondo1.jpg';

         var sectionStyle = {
            width: "200%",
            height: "400px",
            backgroundImage: "url(" + Background + ")"
          };

class Fondo extends Component {
    render() {
        return (
          <section style={ sectionStyle }>
          </section>
        );
      }
}


export default Fondo;