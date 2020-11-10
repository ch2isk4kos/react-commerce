import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Login from './components/Login';
import ProductList from './components/ProductList';

import Context from './Context.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      cart: {},
      products: [],
    };

    this.routerRef = React.createRef();
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          login: this.login,
          addToCart: this.addToCart,
          addProduct: this.addProduct,
          removeFromCart: this.removeFromCart,
          clearCart: this.clearCart,
          checkout: this.checkout
        }}
      >
        <Router ref={this.routerRef}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/products" component={ProductList} />
              <Route exact path="/add-product" component={AddProduct} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}

export default App;