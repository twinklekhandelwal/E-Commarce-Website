import React, { Component } from 'react';
import Title from './Title'
import {storeProducts} from '../data'

 class ProductList extends Component {
   state=({
     products:storeProducts
   })
  render() {
    console.log(this.state.products)
    return (
      <React.Fragment>
        <div className="py-5">
        <div className="container">
          <Title name="our" title="product"/>
        <div className="row">

          </div>
          </div>
          </div>
        </React.Fragment>
    );
  }
}
export default ProductList