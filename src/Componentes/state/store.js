import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';


import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';


export default (initialState)=>{

const sagaMiddleware=createSagaMiddleware();

const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_?window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_:compose;

const enhancers=composeEnhancers(applyMiddleware(sagaMiddleware));

	const store= createStore(
reducer,
initialState,
enhancers 
		);
	return store;
}
