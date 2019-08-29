import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/include/header.css';
import logo_1 from '../../assets/images/logo_1.png';
import searchIcon from '../../assets/images/search.png';
import userIcon from '../../assets/images/user.svg';
import cartIcon from '../../assets/images/cart.svg';
import phoneIcon from '../../assets/images/phone.svg';

class Header extends Component {
  render() {
    return (
      <div className="super_container">
        <header className="header">
          <div className="header_overlay" />
          <div className="header_content d-flex flex-row align-items-center justify-content-start">
            <Link to="/">
              <div className="logo">
                <a href="">
                  <div className="d-flex flex-row align-items-center justify-content-start">
                    <div><img src={logo_1} alt="" /></div>
                    <div>Simple Men</div>
                  </div>
                </a>
              </div>
            </Link>
            <div className="hamburger"><i className="fa fa-bars" aria-hidden="true" /></div>
            <nav className="main_nav">
              <ul className="d-flex flex-row align-items-start justify-content-start">
                <li className="active"><a href="">Shirts</a></li>
                <li><a href="">Pants</a></li>
                <li><a href="">Shoes</a></li>
                <li><a href="">Accessories</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </nav>
            <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
              {/* Search */}
              <div className="header_search">
                <form action="" id="header_search_form">
                  <input type="text" className="search_input" placeholder="Search Item" required="required" />
                  <button className="header_search_button"><img src={searchIcon} alt="" /></button>
                </form>
              </div>
              {/* User */}
              <div className="user"><a href=""><div><img src={userIcon} alt="" /></div></a></div>
              {/* Cart */}
              <div className="cart"><a href=""><div><img className="svg" src={cartIcon} alt="" /><div>1</div></div></a></div>
              {/* Phone */}
              <div className="header_phone d-flex flex-row align-items-center justify-content-start">
                <div><div><img src={phoneIcon} alt="" /></div></div>
                <div>+84 333 06 10 96</div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header;
