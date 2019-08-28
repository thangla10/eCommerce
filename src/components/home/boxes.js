import React, { Component } from 'react';
import '../../assets/styles/boxes.css';
import box from '../../assets/images/box_bg.jpg';
import box_1 from '../../assets/images/home_2.jpg';
import box_2 from '../../assets/images/box_shoe.jpg';
import box_3 from '../../assets/images/box_accessories.jpg';

class Box extends Component {
  render() {
    return (
      <div className="super_container_inner">
        <div className="super_overlay"></div>
        <div className="boxes">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="boxes_container d-flex flex-row align-items-start justify-content-between flex-wrap">
                  {/* Box */}
                  <div className="box">
                    <div className="background_image" style={{ backgroundImage: `url(${box})` }} />
                    <div className="box_content d-flex flex-row align-items-center justify-content-start">
                      <div className="box_left">
                        <div className="box_image">
                          <a href="">
                            <div className="background_image" style={{ backgroundImage: `url(${box_1})` }} />
                          </a>
                        </div>
                      </div>
                      <div className="box_right text-center">
                        <div className="box_title">Clothing Collection</div>
                      </div>
                    </div>
                  </div>
                  {/* Box */}
                  <div className="box">
                    <div className="background_image" style={{ backgroundImage: `url(${box})` }} />
                    <div className="box_content d-flex flex-row align-items-center justify-content-start">
                      <div className="box_left">
                        <div className="box_image">
                          <a href="">
                            <div className="background_image" style={{ backgroundImage: `url(${box_2})` }} />
                          </a>
                        </div>
                      </div>
                      <div className="box_right text-center">
                        <div className="box_title">Shoes Collection</div>
                      </div>
                    </div>
                  </div>
                  {/* Box */}
                  <div className="box">
                    <div className="background_image" style={{ backgroundImage: `url(${box})` }} />
                    <div className="box_content d-flex flex-row align-items-center justify-content-start">
                      <div className="box_left">
                        <div className="box_image">
                          <a href="">
                            <div className="background_image" style={{ backgroundImage: `url(${box_3})` }} />
                          </a>
                        </div>
                      </div>
                      <div className="box_right text-center">
                        <div className="box_title">Accessories Collection</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Box;
