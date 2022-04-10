import React, { Component } from "react";
import "../styles/Cart.css";
import CartItem from "../components/CartItem"

export default class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="cart">
        <div>
          <h2 className="cart_headerTitle">CART</h2>
          <CartItem />
          <CartItem />
        </div>
        </div>
      </React.Fragment>
    );
  }
}
