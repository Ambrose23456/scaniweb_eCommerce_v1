import React, { Component } from "react";
import Product from "../components/Product";
import '../styles/home.css'
import CartOverLay from "./cartOverLay";
import CurrencySwitcher from "../components/currencySwitcher";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
      <CurrencySwitcher />
      <CartOverLay />
      <div className="home">
        <div className="home__container">
        <div >
          <h1 className="home__categoryName">Category name</h1>
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}
