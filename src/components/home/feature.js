import React, { Component } from 'react';
import '../../assets/styles/feature.css';
import day_return from '../../assets/images/icon_1.svg';
import free_ship from '../../assets/images/icon_3.svg';
import safe_shop from '../../assets/images/icon_2.svg';

class Feature extends Component {
  render() {
    return(
      <div class="super_container_inner">
        <div class="super_overlay"></div>
        <div className="features">
          <div className="container">
            <div className="row">
              {/* Feature */}
              <div className="col-lg-4 feature_col">
                <div className="feature d-flex flex-row align-items-start justify-content-start">
                  <div className="feature_left">
                    <div className="feature_icon"><img src={day_return} alt="" /></div>
                  </div>
                  <div className="feature_right d-flex flex-column align-items-start justify-content-center">
                    <div className="feature_title">30 Days Return</div>
                  </div>
                </div>
              </div>
              {/* Feature */}
              <div className="col-lg-4 feature_col">
                <div className="feature d-flex flex-row align-items-start justify-content-start">
                  <div className="feature_left">
                    <div className="feature_icon ml-auto mr-auto"><img src={safe_shop} alt="" /></div>
                  </div>
                  <div className="feature_right d-flex flex-column align-items-start justify-content-center">
                    <div className="feature_title">Quality Assurance</div>
                  </div>
                </div>
              </div>
              {/* Feature */}
              <div className="col-lg-4 feature_col">
                <div className="feature d-flex flex-row align-items-start justify-content-start">
                  <div className="feature_left">
                    <div className="feature_icon"><img src={free_ship} alt="" /></div>
                  </div>
                  <div className="feature_right d-flex flex-column align-items-start justify-content-center">
                    <div className="feature_title">Free Shipping</div>
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
export default Feature;
