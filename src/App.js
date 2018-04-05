import React, { Component } from 'react';
import {connect} from 'react-redux';
import CuadroProductos from './Components/CuadroProductos';
import CartTable from './Components/cartTable/'; 
import {fetchProducts} from './state/product/actions';
import {fetchCart, addToCart} from './state/cart/actions';

class App extends Component {
  componentWillMount(){
    this.props.fetchProducts();
    this.props.fetchCart();

    
  }
  
  addToCart=(product) => {
    this.props.addToCart(product._id, 1)
}

  render() {
    const {
      isProductLoading,
      products,
      cart, 
    }= this.props;

if(isProductLoading){
      return <h2>Loading...</h2>
    }

    console.log('cart', cart);
    return (
      <div>
        
        <h1>Su carrito de compras</h1>
        <CartTable
        cart={cart}
        />
        <h1>Seleccione el medicamento que desea comprar</h1> 
        <CuadroProductos 
        products={products}
        addToCart={this.addToCart}
        />

        </div>
         );
  }
}

const getProductById=(products, productId)=> products.find(p =>p._id==productId); 

const populateCartItems = (cart, products) => ({ 
...cart,
items:cart.items.map(item => ({
  ...item,
  product:getProductById(products, item.productId),
})),
});

const mapStateToPros=(state)=>({
  isProductLoading:state.product.isLoading,
  products: state.product.products,
  cart: populateCartItems(state.cart.cart, state.product.products),
});
const mapDispatchToProps={
  fetchProducts,
  fetchCart, 
  addToCart
};
export default connect(mapStateToPros, mapDispatchToProps)(App);
