import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './Componentes/state/store';

//Rutas
import AppRoutes from './routes';

//Assets
import './index.css';
import App from './Componentes/App';

const store = configureStore({ });
console.log(store.getState());
render(
    <Router>
        <AppRoutes />
    </Router>, document.getElementById('root'));
registerServiceWorker();
