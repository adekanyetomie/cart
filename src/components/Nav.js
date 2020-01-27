import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
          <nav className="navbar is-primary">
  <div className="navbar-brand">
    <Link to = "/" className = "navbar-item">
      <img src="https://previews.123rf.com/images/val2014/val20141603/val2014160300005/54302312-shopping-cart-icon.jpg" alt="cart" width="50" height="10"/>
    </Link>
    
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <Link  to="/" className ="navbar-item">
      Home
      </Link>
      <Link  to="/" className ="navbar-item">
      Product
      </Link>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <button  className="button is-light is-outlined">
            <Link to ="/mycart">
              <span>My Cart</span>
            </Link>
            </button >
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
            
        )
    }
}
