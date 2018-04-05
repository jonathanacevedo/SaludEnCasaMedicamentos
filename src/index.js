import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './state/store'
import registerServiceWorker from './registerServiceWorker';
import { Provider} from 'react-redux';
import './libs/cart/api';


const store=configureStore({ });
ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.getElementById('root')
	);
registerServiceWorker();
