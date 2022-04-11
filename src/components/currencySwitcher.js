import React, { Component } from 'react'
import '../styles/currencySwitcher.css'

export default class CurrencySwitcher extends Component {
  render() {
    return (
      <div className="currencySwitcher">
      <div className="currencySwitcher__currency">
      <p>$ USD </p>
      </div>
      <div className="currencySwitcher__currency"> 
      <p> EUR </p>
      </div>
      <div className="currencySwitcher__currency">
      <p> JPY </p>
      </div>
      </div>
    )
  }
}
