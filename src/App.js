import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './componants/navbar';
import ProductList from './componants/productlist';
import Details from './componants/detail';
import Card from './componants/card';
import Defalut from './componants/defalut';
import 'bootstrap/dist/css/bootstrap.min.css';

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
		</React.Fragment>
	);
}

export default App;
