import React, { Component } from 'react';
import Title from './Title';
import Product from './product';
// import { storeProducts } from '../data';
import { ProductConsumer } from '../contact';
class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="my" productname="mobiles" title="product" />
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => (
										<Product key={product.id} product={product} />
									));
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default ProductList;
