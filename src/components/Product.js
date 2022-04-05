import React, { Component } from "react";
import "../styles/product.css";

export default class Product extends Component {
  render() {
    return (
      <div className="product">
        <img src={process.env.PUBLIC_URL + "/images/Product D.svg"} />
        <div className="product__info">
          <p className="product__name">Apollo Running Short</p>
          <p className="product__price">
            <small>$</small>
            <strong>50</strong>
          </p>
        </div>
      </div>
    );
  }
}
