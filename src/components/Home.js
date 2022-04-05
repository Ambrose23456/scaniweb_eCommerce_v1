import React, { Component } from "react";
import Product from "./Product";
import '../styles/home.css'

export default class Home extends Component {
  render() {
    return (
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
    );
  }
}
