import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import sagas from './sagas';



export default (initialState)=>{

const sagaMiddleware=createSagaMiddleware();

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: compose;

const enhancers=composeEnhancers(applyMiddleware(sagaMiddleware));

	const store= createStore(
reducer,
initialState,
enhancers 
		);
	sagas.map(sagaMiddleware.run);
	return store;
}
