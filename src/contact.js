import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();
class ProductProvider extends Component {
	state = {
		products: [],
		detailProduct: detailProduct,
		cart: storeProducts,
		modalOpen: false,
		modalProdact: detailProduct,
		cartSubTotal:0,
		cartTax:0,
		cartTotle:0
	};
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
		
		const product = this.state.products.find(item => item.id === id);
		return product;
	};

	handelDetail = id => {
		const product = this.getItem(id);
		this.setState(() => {
			return { detailProduct: product };
		});
	};
	addToCart = id => {
		let temproducts = [...this.state.products];
		const index = temproducts.indexOf(this.getItem(id));
		const product = temproducts[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		this.setState(
			() => {
				return { products: temproducts, cart: [...this.state.cart, product] };
			},
			() => {
				this.addTotals();
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
	increment = id => {
		console.log('csc');
	};
	decrement = id => {
		console.log('ccc');
	};
	removeItem = id => {
		
	};
	clearcart = id => {
		this.setState(()=>{
			return{cart:[]};
		},()=>{
			this.setProducts();
			this.addTotals();
		})
	};
	addTotals=()=>{
		let subTotal=0;
		this.state.cart.map(item=>(subTotal+=item.total));
		const tempTax=subTotal*0.1;
		const tax=parseFloat(tempTax.toFixed(2));
		const total=subTotal+tax
		this.setState(()=>{
			return{
				cartSubTotal:subTotal,
				cartTax:tax,
				cartTotal:total

			}
		})
	}
	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handelDetail: this.handelDetail,
					addToCart: this.addToCart,
					openModal: this.openModal,
					closeModal: this.closeModal,
					increment: this.increment,
					decrement: this.decrement,
					removeItem: this.removeItem,
					clearcart: this.clearcart,
				}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}
const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
