import React, { Component } from 'react';
import Title from './Title';
import Product from './product'
// import { storeProducts } from '../data';
import { ProductConsumer } from '../contact';
class ProductList extends Component {
	// state = {
	// 	products: storeProducts,
	// };
	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="our" title="product" />
						<div className="row">
							<ProductConsumer>
								{value => {
									
									return	(value.products.map(product => {
                      return <Product key={product.id}
                       product={product}/>;
                       
										})
                  )
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
