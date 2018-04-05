import {
	FETCH_PRODUCTS,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FAILURE,
} from '../actionTypes';

const initialState={
	isloading:false,
	products:[],
	error:null,
};

export default (state= initialState, action) =>{
	switch(action.type){
		case FETCH_PRODUCTS:
		return{
			...state,
			isloading:true,
		};

		case FETCH_PRODUCTS_SUCCESS:
		return{
			...state,
			isloading:false,
			products: action.products,
		};

		case FETCH_PRODUCTS_FAILURE:
		return{
			...state,
			isloading:false,
			error: action.error, 
		};
		
		

		default:
		return state;
	}
}