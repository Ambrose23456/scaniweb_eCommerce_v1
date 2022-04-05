import React, { Component } from "react";
import "../styles/Header.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__navOne">
          <span className="header__optionOne">WOMEN</span>

          <span className="header__optionOne">MEN</span>

          <span className="header__optionOne">KIDS</span>
        </div>

        <div className="header__logo">
          <img src={process.env.PUBLIC_URL + "/images/Group.svg"} />
        </div>

        <div className="header___navTwo">
          <div className="header___navTwoOptions">
            <span className="header__dollarSign">$</span>
            <img className="header__downwardPointer" src={process.env.PUBLIC_URL + "/images/Vector.svg"} />
            <img className="header__cart" src={process.env.PUBLIC_URL + "/images/Vector1.svg"} />
            <span className="header_basketCount">0</span>
          </div>
        </div>
      </div>
    );
  }
}
