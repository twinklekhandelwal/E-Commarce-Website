import React, { Component } from 'react';
import {BrowserRouter,Link} from 'react-router-dom'
import logo from '../download.svg'
export default class navbar extends Component {
  render() {
    return (
      
       <nav className= "navbar navbar-expand-ml bg-primary navbar-dark">
         <BrowserRouter>
     <Link to='/'>
       <img src={logo} alt="store" className="navbar-brand"/>
      </Link>
      </BrowserRouter>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5
        ">
          <BrowserRouter>
          <Link to="/" className="nav-link" >
            products
          </Link>
          </BrowserRouter>
          </li>
      </ul>
      <BrowserRouter>
       <Link to ="/card" className="ml-auto">
        <button>
          <i className="fas fa-card-plus"/>
            mycard
            </button>
        </Link>
        </BrowserRouter>

       

      </nav>
  
    );
  }
}
