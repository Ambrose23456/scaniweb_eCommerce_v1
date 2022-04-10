import React, { Component } from "react";
import Navbar from "./components/Header";
import Home from "./pages/Home";
import {Routes, Route } from 'react-router-dom';
import Cart from "./pages/Cart"
import PDP from "./pages/PDP"


export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Cart" element={ <Cart /> } />
        <Route exact path="/PDP" element={ <PDP /> } /> 
      </Routes>
      </div>
    );
  }
}
