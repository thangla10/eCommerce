import React, { Component } from 'react';
import home from '../../assets/images/home.jpg';
import home_1 from '../../assets/images/home_1.jpg';
import home_2 from '../../assets/images/home_2.jpg';
import home_3 from '../../assets/images/home_3.jpg';

class Slide extends Component {
  render() {
    return (
      <div className="home_slider_container">
        <div className="owl-carousel owl-theme home_slider">
          {/* Slide */}
          <div className="owl-item">
            <div className="background_image" style={{ backgroundImage: `url(${home})` }} />
            <div className="container fill_height">
              <div className="row fill_height">
                <div className="col fill_height">
                  <div className="home_container d-flex flex-column align-items-center justify-content-start">
                    <div className="home_content">
                      <div className="home_title">New Arrivals</div>
                      <div className="home_items">
                        <div className="row">
                          <div className="col-sm-3 offset-lg-1">
                            <div className="home_item_side"><a href=""><img src={home_1} alt="" /></a></div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-8 offset-sm-2 offset-md-0">
                            <div className="product home_item_large">
                              <div className="product_tag d-flex flex-column align-items-center justify-content-center">
                                <div>
                                  <div>Sale</div>
                                  <div>20<span>%</span></div>
                                </div>
                              </div>
                              <div className="product_image"><img src={home_2} alt="" /></div>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="home_item_side"><a href=""><img src={home_3} alt="" /></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide */}
          <div className="owl-item">
            <div className="background_image" style={{ backgroundImage: `url(${home})` }} />
            <div className="container fill_height">
              <div className="row fill_height">
                <div className="col fill_height">
                  <div className="home_container d-flex flex-column align-items-center justify-content-start">
                    <div className="home_content">
                      <div className="home_title">Popular</div>
                      <div className="home_items">
                        <div className="row">
                          <div className="col-sm-3 offset-lg-1">
                            <div className="home_item_side"><a href=""><img src={home_3} alt="" /></a></div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-8 offset-sm-2 offset-md-0">
                            <div className="product home_item_large">
                              <div className="product_tag d-flex flex-column align-items-center justify-content-center">
                                <div>
                                  <div>Buy 2</div>
                                  <div>Get<span>1</span></div>
                                </div>
                              </div>
                              <div className="product_image"><img src={home_1} alt="" /></div>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="home_item_side"><a href=""><img src={home_2} alt="" /></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide */}
          <div className="owl-item">
            <div className="background_image" style={{ backgroundImage: `url(${home})` }} />
            <div className="container fill_height">
              <div className="row fill_height">
                <div className="col fill_height">
                  <div className="home_container d-flex flex-column align-items-center justify-content-start">
                    <div className="home_content">
                      <div className="home_title">Trendsetters</div>
                      <div className="home_items">
                        <div className="row">
                          <div className="col-sm-3 offset-lg-1">
                            <div className="home_item_side"><a href=""><img src={home_3} alt="" /></a></div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-8 offset-sm-2 offset-md-0">
                            <div className="product home_item_large">
                              <div className="product_tag d-flex flex-column align-items-center justify-content-center">
                                <div>
                                  <div>Event</div>
                                  <div>2/9</div>
                                </div>
                              </div>
                              <div className="product_image"><img src={home_2} alt="" /></div>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="home_item_side"><a href=""><img src={home_1} alt="" /></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home_slider_nav home_slider_nav_prev"><i className="fa fa-chevron-left" aria-hidden="true" /></div>
        <div className="home_slider_nav home_slider_nav_next"><i className="fa fa-chevron-right" aria-hidden="true" /></div>
        {/* Home Slider Dots */}
        <div className="home_slider_dots_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="home_slider_dots">
                  <ul id="home_slider_custom_dots" className="home_slider_custom_dots d-flex flex-row align-items-center justify-content-center">
                    <li className="home_slider_custom_dot active">01</li>
                    <li className="home_slider_custom_dot">02</li>
                    <li className="home_slider_custom_dot">03</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Slide;
