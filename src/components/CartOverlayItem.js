import React, { Component } from "react";
import "../styles/CartOverlayitem.css";

export default class CartOverlayItem extends Component {
  render() {
    return (
      <div className="cartOverlayItem">
     
        <div className="cartOverlayItem__itemLeft">
          <h2 className="cartOverlayitem__itemName">Apollo</h2>
          <p className="cartOverlayItem__itemDescription">Running Short</p>
          <p className="cartOverlayItem__price">$50</p>

          <button className="cartOverlayItem__itemLeftButton">s</button>
          <button className="cartOverlayItem__itemLeftButton">m</button>
        </div>
        <div className="cartOverlayItem__itemRight">
          <button className="cartOverlayItem__itemRightButton">+</button>
          <p className="cartOverlayItem__itemQuantity">0</p>
          <button className="cartOverlayItem__itemRightButton">-</button>
        </div>
        <div className="cartOverlayItem_itemImageContainer"></div>
        <img
          className="cartOverlayItem__imagePreview"
          src={process.env.PUBLIC_URL + "/images/CartOverlayImagePreview.svg"}
        />
       
      </div>
    );
  }
}
