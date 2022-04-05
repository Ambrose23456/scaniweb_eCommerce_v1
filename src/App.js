import React, { Component } from 'react'
import Navbar from './components/Header';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    )
  }
}

