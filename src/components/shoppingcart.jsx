import React, { Component } from "react";
import prod from './items'

export default class Shoppingcart extends Component {
  constructor() {
    super();
    this.state = {prod}
  }

  //!Methods:

  //!Method Increase

  addQuantity = (index) => {
    this.setState({
      quantity: this.state.prod.item[index].quantity++,
    });
  };
  subQuantity = (index) => {
    this.setState({
      quantity: this.state.prod.item[index].quantity--,
    });
  };

  //! Method Decrease

  render() {
    let Products = this.state.prod
    let iphone = Products.item[0];
    let rubix = Products.item[1];

    let sumTotalItems = iphone.quantity + rubix.quantity;
    let phoneQt = iphone.quantity;
    let walletQt = rubix.quantity;
    let cartSubTotal =(phoneQt * iphone.price) + (walletQt * rubix.price);

    let tax = cartSubTotal * Products.tax;
    let total = tax + cartSubTotal;

    return (
        
      <div className="wrapper">
        {" "}
        {/* //This is going to be the container of EVERYTHING //Something to hold
        our items */}
        <div className="items">
          <div className="firstItem">
            {/* //How do we get this to show us our items? //.... */}
            {/* {this.state.item[0].quantity} */}
           <h2>{iphone.name}</h2> 
            <p>Price ${iphone.price} <span>Quantity: {iphone.quantity}</span></p>
            <button onClick = {() =>{this.addQuantity(0)}}>+</button>
            <button onClick = {() =>{this.subQuantity(0)}}>-</button>
            
          </div>
          <div className="secondItem">
            {/* //.... */}
            <h2>{rubix.name}</h2> 
            <p>Price ${rubix.price} <span>Quantity: {rubix.quantity}</span></p>
            <button onClick = {() =>{this.addQuantity(1)}}>+</button>
            <button onClick = {() =>{this.subQuantity(1)}}>-</button>
            
          </div>
        </div>
        {/* //Something to hold our checkout */}
        <div className="checkOut">
          {/* //What do we need in here/ how do we get it to show. */}
          <h2>Checkout</h2> 
          <p>Subtotal ({sumTotalItems} items): ${cartSubTotal}</p>
          <p> delivery Free estimated tax:  ${tax}</p>
          <div>Total ${total}</div>
        </div>
      </div>
    );
  }
}

// export default Shoppingcart;
