import React, { Component } from "react";
import "../styles/CartOverlay.css";
import CartOverlayItem from "../components/CartOverlayItem"

export default class CartOverLay extends Component {
  render() {
    return (
      <div className="cartOverlay">
        <div className="cartOverlay__contentCard">
          <div className="cartOverlay__header">
            <p className="cartOverlay__headerTitle"> My bag, <span className = "cartOverlay__itemQty">2 items</span></p>
          </div>
          <CartOverlayItem />
          <div>
            <h2>total</h2>
            <p> $100</p>
          </div>
          <button>VIEW BAG</button>
          <button>CHECK OUT</button>
        </div>
      </div>
    );
  }
}
