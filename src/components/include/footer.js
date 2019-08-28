import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/footer.css';
import logo_2 from '../../assets/images/logo_2.png';

class Footer extends Component {
  render() {
    return (
      <div class="super_container_inner">
        <div class="super_overlay"></div>
        <footer className="footer">
          <div className="footer_content">
            <div className="container">
              <div className="row">
                {/* About */}
                <div className="col-lg-4 footer_col">
                  <div className="footer_about">
                    <Link to="/">
                      <div className="footer_logo">
                        <a href="">
                          <div className="d-flex flex-row align-items-center justify-content-start">
                            <div className="footer_logo_icon"><img src={logo_2} alt="" /></div>
                            <div>Simple Men</div>
                          </div>
                        </a>
                      </div>
                    </Link>
                    <div className="footer_about_text">
                      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Fusce venenatis vel velit vel euismod.</p>
                    </div>
                  </div>
                </div>
                {/* Footer Links */}
                <div className="col-lg-4 footer_col">
                  <div className="footer_menu">
                    <div className="footer_title">Support</div>
                    <ul className="footer_list">
                      <li>
                        <a href=""><div>Customer Service<div className="footer_tag_1">online now</div></div></a>
                      </li>
                      <li>
                        <a href=""><div>Return Policy</div></a>
                      </li>
                      <li>
                        <a href=""><div>Size Guide<div className="footer_tag_2">recommended</div></div></a>
                      </li>
                      <li>
                        <a href=""><div>Terms and Conditions</div></a>
                      </li>
                      <li>
                        <a href=""><div>Contact</div></a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Footer Contact */}
                <div className="col-lg-4 footer_col">
                  <div className="footer_contact">
                    <div className="footer_title">Stay in Touch</div>
                    <div className="newsletter">
                      <form action="#" id="newsletter_form" className="newsletter_form">
                        <input type="email" className="newsletter_input" placeholder="Subscribe to our Newsletter" required="required" />
                        <button className="newsletter_button">+</button>
                      </form>
                    </div>
                    <div className="footer_social">
                      <div className="footer_title">Social</div>
                      <ul className="footer_social_list d-flex flex-row align-items-start justify-content-start">
                        <li><a href=""><i class="fab fa-facebook-f" aria-hidden="true" /></a></li>
                        <li><a href=""><i class="fab fa-youtube" aria-hidden="true" /></a></li>
                        <li><a href=""><i class="fab fa-google-plus-g" aria-hidden="true" /></a></li>
                        <li><a href=""><i class="fab fa-instagram" aria-hidden="true" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bar">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="footer_bar_content d-flex flex-md-row flex-column align-items-center justify-content-start">
                    <div className="copyright order-md-1 order-2">
                      Copyright © All rights reserved | This template is made with <i class="far fa-heart" aria-hidden="true" /> by <a href="https://facebook.com/huuthangjunior" target="_blank">La Huu Thang</a>
                    </div>
                    <nav className="footer_nav ml-md-auto order-md-2 order-1">
                      <ul className="d-flex flex-row align-items-center justify-content-start">
                        <li><a href="">Shirts</a></li>
                        <li><a href="">Pants</a></li>
                        <li><a href="">Shoes</a></li>
                        <li><a href="">Accessories</a></li>
                        <li><a href="">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
export default Footer;
