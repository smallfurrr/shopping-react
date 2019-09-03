import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';
import Cart from './components/cart/cart';

class App extends React.Component {
    constructor() {
    super();
    this.state = {
      message: 'hello',
      input: "",
      productList: [],

    };
  }

    // componentDidMount is like window onload
    componentDidMount() {

        let url = `http://localhost:3000/products`;

        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({productList: result})
            },
        )
    }

  render() {
    return (
      <div>
        <Search all={this.state.productList} />
        <Product product={this.state.searchedProduct} />
        <Cart />
      </div>
    );
  }
}

export default hot(module)(App);