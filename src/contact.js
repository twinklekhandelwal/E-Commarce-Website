import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();
class ProductProvider extends Component {
	state = { products: storeProducts, detailProduct: detailProduct, cart: [], modalOpen: true ,modalProdact:detailProduct};
	componentDidMount() {
		this.setProducts();
	}
	setProducts = () => {
		let temproducts = [];
		storeProducts.map(item => {
			const singleitem = { ...item };
			temproducts = [...temproducts, singleitem];
			// console.log(singleitem)
		});
		this.setState(() => {
			return { products: temproducts };
		});
	};

	getItem = id => {
		console.log(id);
		const product = this.state.products.find(item => item.id === id);
		return product;
	};

	handelDetail = id => {
		const product = this.getItem(id);
		this.setState(() => {
			return { detailProduct: product };
		});
	};
	addToCard = id => {
		let temproducts = [...this.state.products];
		const index = temproducts.indexOf(this.getItem(id));
		const product = temproducts[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		this.state(
			() => {
				return { products: temproducts, cart: [...this.state.cart, product] };
			},
			() => {
				console.log(this.state);
			},
		);
	};
	openModal = id => {
		const product = this.getItem(id);
		this.setState(() => {
			return { modalProdact: product, modalOpen: true };
		});
	};
	closeModal = id => {
		this.setState(() => {
			return { modalOpen: false };
		});
	};
	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handelDetail: this.handelDetail,
					addToCart: this.addToCart,
					openModal: this.openModal,
					closeModal: this.closeModal,
				}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}
const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
