import React, { Component } from "react";
import "../styles/pdp.css";

export default class PDP extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Pdp">
          <div className="pdp__containerOne">
            <img className="pdp__smallImage"src={process.env.PUBLIC_URL + "/images/pdpSmallImage.svg"} alt="" />
            <img className="pdp__smallImage"src={process.env.PUBLIC_URL + "/images/pdpSmallImage.svg"} alt="" />
            <img className="pdp__smallImage"src={process.env.PUBLIC_URL + "/images/pdpSmallImage.svg"} alt="" />
          </div>
          <div className="pdp__productImage">
            <img className="pdpLargeImage"src={process.env.PUBLIC_URL + "/images/pdpLargeImage.svg"} alt="" />
          </div>
          <div className="pdp__itemDetail">
            <h2 className="pdp__itemDetailBrandName">Apollo</h2>
            <p className="pdp__itemDetailDescription">Running short </p>

            <p className="pdp__itemDetailSize">SIZE:</p>

            <button className="pdp__itemDetailSizeButton">XS</button>
            <button className="pdp__itemDetailSizeButton">S</button>
            <button className="pdp__itemDetailSizeButton">M</button>
            <button className="pdp__itemDetailSizeButton">L</button>

            <p className="pdp__itemDetailPrice">PRICE:</p>
            <p className="pdp__itemDetailAmount">$50.00</p>

            <button className="pdp__itemDetailCartButton">ADD TO CART</button>
            <p className="pdp__itemDetailDescriptive">
              Find stunnings women's cocktail dresses and party dresses standout
              in lace and metallic cocktail dresses and party dresses from all
              your favorite brands
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
