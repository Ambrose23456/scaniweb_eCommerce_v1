import React, { Component } from 'react'
import '../styles/CartOverlayitem.css'
export default class Cartoverlaycomp extends Component {
  render() {
    return (
      <div className='Cartoverlaycomp'>
          <div className="cartinfo__left">
          <span className="brand">Apollo</span>
          <span className="item__type">Running short</span>
          <span className="item__price">$50</span>

          <div className="size__button">
            <div className="btn__S">
              <button>S</button>
            </div>
            <div className="btn__M">
              <button>M</button>
            </div>
          </div>
        </div>
        <div className="cartinfo__right">
          <div className="change__quantity">
            <div className="plus">
              <button>+</button>
            </div>
            <div className="quantity">
              <span> 1 </span>
            </div>
            <div className="minus">
              <button>-</button>
            </div>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/ProductD.svg"}
            alt=""
            className="preview__Images"
          />
        </div>
      </div>
    )
  }
}
