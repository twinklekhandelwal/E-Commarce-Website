import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import Emptycart from './Emptycart';
import CartList from "./cartList"
import CartTotal from "./CartTotal"
import { ProductConsumer } from '../../contact';

export default class Card extends Component {
	render() {
		return (
			<section>
				
				<ProductConsumer>
					{value => {
						const { cart } = value;
						if (cart.length > 0) {
							return (
								<React.Fragment>
									<Title name="your" title="cart" />
									<CartColumns />
									<CartList value={value}/>
									<CartTotal value={value}/>
								</React.Fragment>
							);
						} else {
							return(<React.Fragment> <Emptycart />
							
							</React.Fragment>)
						}

					}}
				</ProductConsumer>
			</section>
		);
	}
}
