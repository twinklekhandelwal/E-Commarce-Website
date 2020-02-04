import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data'
const ProductContext = React.createContext();
 class ProductProvider extends Component {
     state=({products:storeProducts,
    detailProduct:detailProduct
})
handelDetail=()=>{
    console.log('hello from detail')
}
addToCard=()=>{
    console.log('hello from cart')
}
     
	render() {
        return <ProductContext.Provider value={{...this.state,
        handelDetail:this.handelDetail,
        addToCard:this.addToCard}}>
            {this.props.children} 
            </ProductContext.Provider>
	}
}
const ProductConsumer=ProductContext.Consumer;
export{ProductConsumer,ProductProvider}