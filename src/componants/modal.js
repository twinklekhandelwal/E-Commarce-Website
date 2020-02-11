import React, { Component } from 'react';

import styled from 'styled-components'
import {  ProductConsumer} from "../contact"
import { ButtonContainer } from "./Button"
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render () {
    return (

      <ProductConsumer>
        {(value) =>{
  const { modalOpen, closeModal } = value;
          const { img, title, price} = value.modalProdact;
          if (!modalOpen) {
            return null;
          }
          else {
            return (<ModalContainer>
              <div className="container">
                <div classNam="row">
                  <div id="modal" className="col-8 mx-auto col-md-6-col-lg-4 text-center text-capitalize">
                    <h5>item added to the cart</h5><img src={img} className="img-fluid" alt="product" />
                    <h5>{title}</h5>
                    <h5>price :${price}</h5>
                  <Link to="/">
                    <ButtonContainer onClick={()=>closeModal()}>
                      countinue shopping
                    </ButtonContainer>
                  </Link>
                  <Link to="/card">
                    <ButtonContainer onClick={()=>closeModal()}>
                    go to cart
                    </ButtonContainer>
                  </Link>
                  </div></div></div>
              
            </ModalContainer>
            );
          }
          }}
</ ProductConsumer>
            );
          }
        }


const ModalContainer=styled.div`
         position:fixed;
        top:0;
        left:0;
        right:0
        bottom:0
        background:rgba(0,0,0,0.3);
        display:flex;
        align-items:center;
justify-content:center;
#modal{

  background:gray

}`