import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import logo from '../download.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
export default class navbar extends Component {
	render() {
		return (
			<Navwrapper className="navbar navbar-expand-ml bg-primary navbar-dark">
				<Link to="/">
					<img src={logo} alt="store" className="navbar-brand" />
				</Link>

				<ul className="navbar-nav align-items-center">
					<li
						className="nav-item ml-5
        ">
						<Link to="/" className="nav-link">
							products
						</Link>
					</li>
				</ul>

				<Link to="/card" className="ml-auto">
					<ButtonContainer>
						<span className="mr-2">
							<i className="fas fa-cart-plus" />
						</span>
						mycard
					</ButtonContainer>
				</Link>
			</Navwrapper>
		);
	}
}
const Navwrapper = styled.nav`
	background: var(--mainBlue);
	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.3rem;
		text-tranform: capitalized;
	}
`;
