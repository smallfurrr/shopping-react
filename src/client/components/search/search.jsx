import React from 'react';
import styles from './style.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
        searchInput: "",
        products: [],
    };
  }

    storeSearchQuery() {
        console.log(event.target.value);
        var searchTerm = event.target.value;
        this.setState({searchInput: searchTerm });
    }

    showProduct() {
        var searchInput = this.state.searchInput;
        var allProducts = this.props.all.products;

        console.log(allProducts[0].name);
        allProducts.map(product=>{
            console.log(product.name)
        })

    }


  render() {
    return (
      <div>
        <h1>searchTerm: {this.state.searchInput}</h1>
        <input onChange={() => this.storeSearchQuery()} className={styles.name} />
        <button onClick={() => this.showProduct()}>CLICK ME</button>
      </div>
    );
  }
}

export default Search;