//Dependencias

import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

//Componentes

import App from './Componentes/App.js';
import Principal from './Componentes/Principal/Principal.js';
import Comprar from './Componentes/Comprar/Comprar.js';
import Consultar from './Componentes/Consultar/Consultar.js';
import Contacto from './Componentes/Contacto/Contacto.js';
import Page404 from './Componentes/Page404/Page404.js';
import IniciarSesion from './Componentes/SignUp.js';


const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/" component={ Principal } />
        <Route path="/comprar" component={ Comprar } />
        <Route path="/consultar" component={ Consultar } />
        <Route path="/contacto" component={ Contacto } />
        <Route path="/login" component={ IniciarSesion } />
        <Route component={Page404} />
    </Switch>
</App>;

export default AppRoutes;
<<<<<<< HEAD
 
=======
 
>>>>>>> 10cc263e39c0c884f1b8a3cfbcfd0a69b519fba3
