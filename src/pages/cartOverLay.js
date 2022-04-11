import React, { Component } from "react";
import "../styles/CartOverlay.css";
import Cartoverlaycomp from "../components/CartOverlaycomp";

export default class Cartoverlay extends Component {
  render() {
    return (
      <div className="Cartoverlay">
        <div className="Cartoverlay__title">
          <p>
            <strong>My Bag</strong>, 2 items
          </p>
        </div>
        <Cartoverlaycomp />
        <Cartoverlaycomp />
        <div className="sumTotal">
          <div className="total">Total</div>
          <div className="price">$100</div>
        </div>
        <div className="Cartoverlay__buttons">
          <div className="viewbag">
            <button>VIEW BAG</button>
          </div>
          <div className="checkout">
            <button>CHECK OUT</button>
          </div>
        </div>
      </div>
    );
  }
}
