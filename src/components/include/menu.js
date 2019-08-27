import React, { Component } from 'react';
import '../../assets//styles/menu.css';
import searchIcon from '../../assets/images/search.png';
import phoneIcon from '../../assets/images/phone.svg';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        {/* Search */}
        <div className="menu_search">
          <form action="#" id="menu_search_form" className="menu_search_form">
            <input type="text" className="search_input" placeholder="Search Item" required="required" />
            <button className="menu_search_button"><img src={searchIcon} alt="" /></button>
          </form>
        </div>
        {/* Navigation */}
        <div className="menu_nav">
          <ul>
            <li><a href="#">Shirts</a></li>
            <li><a href="#">Pants</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="menu_contact">
          <div className="menu_phone d-flex flex-row align-items-center justify-content-start">
            <div><div><img src={phoneIcon} alt="" /></div></div>
            <div>+84 333 06 10 96</div>
          </div>
          <div className="menu_social">
            <ul className="menu_social_list d-flex flex-row align-items-start justify-content-start">
              <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;
