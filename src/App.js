import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Cart from "./componants/Cart/card"
import { Route, Switch } from 'react-router-dom';
import Navbar from './componants/navbar';
import ProductList from './componants/productlist';
import Details from './componants/detail';
import Card from './componants/Cart/card';
import Defalut from './componants/defalut';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './componants/modal'
function App() {
	return (
		<React.Fragment>
			<Navbar />

			<Switch>
				<Route exact path="/" component={ProductList}></Route>
				<Route path="/detail" component={Details}></Route>
				<Route path="/card" component={Card}></Route>

				<Route path="defalut" component={Defalut}></Route>
			</Switch>
			<Modal/>
		
		</React.Fragment>
	);
}

export default App;
