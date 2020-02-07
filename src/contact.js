import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();
class ProductProvider extends Component {
	state = { products: storeProducts, detailProduct: detailProduct };
	componentDidMount() {
		this.setProducts();
	}
	setProducts = () => {
		let temproducts = [];
		storeProducts.forEach(item => {
			const singleitem = { ...item };
			temproducts = [...temproducts, singleitem];
		});
		this.setState(() => {
			return { products: temproducts };
		});
	};

	getItem = id => {
		const product = this.state.products.find(item => item.id === id);
		return product;
	};

	handelDetail = id => {
		const product = this.getItem(id);
		this.setState(() => {
			return { detailProduct: product };
		});
	};
	addToCard = () => {
		console.log('hello from cart');
	};

	render() {
		return (
			<ProductContext.Provider
				value={{ ...this.state, handelDetail: this.handelDetail, addToCart: this.addToCart }}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}
const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
