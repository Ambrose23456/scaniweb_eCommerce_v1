import React, { Component } from "react";
import "../styles/CartItem.css";

export default class CartItem extends Component {
  render() {
    return (
      <div className="cart__item">
        <div className="cart__itemLeft">
          <h2 className="cart__itemName">Apollo</h2>
          <p className="cart__itemDescription">Running Short</p>
          <p className="cart__itemPrice">$50</p>

          <button className="cart__itemLeftButton">s</button>
          <button className="cart__itemLeftButton">m</button>
        </div>
        <div className="cart__itemRight">
          <button className="cart__itemRightButton">+</button>
          <p className="cart__itemQuantity">0</p>
          <button className="cart__itemRightButton">-</button>
        </div>
        <div className="cart_itemImageContainer"></div>
        <img
          className="cart__itemImage"
          src={process.env.PUBLIC_URL + "/images/cartPageImage.svg"}
        />
      </div>
    );
  }
}
