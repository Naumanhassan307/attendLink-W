import React, { Component } from "react";
import Slider from "react-slick";
import "./SliderStyle.css";



import res1 from "../../assets/res/res1.jpg";
import res2 from "../../assets/res/res2.jpg";
import res3 from "../../assets/res/res3.jpg";
import res4 from "../../assets/res/res4.jpg";
import res5 from "../../assets/res/res5.jpg";


export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className="blog-main-div">
        <p className="blog-main-div-tlt">ALL THAT’S NEW RESTAURENTS</p>
        
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          slidesToScroll={1}
          className="Slider-div"
        >
          <div className="blog-main-div-item">
            <img src={res1} className="blog-main-div-item-img" />
            <div className="blog-main-div-item-txt-upper">
              <h5 className="blog-main-div-item-txt">Solely Solids</h5>
              <p className="blog-main-div-item-txt">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <br />
          </div>
          <div className="blog-main-div-item">
            <img src={res2} className="blog-main-div-item-img" />
            <div className="blog-main-div-item-txt-upper">
              <h5 className="blog-main-div-item-txt">
                How To Stylize Your ComfortCorner
              </h5>
              <p className="blog-main-div-item-txt">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="blog-main-div-item">
            <img src={res3} className="blog-main-div-item-img" />
            <div className="blog-main-div-item-txt-upper">
              <h5 className="blog-main-div-item-txt">How To Buy Bathrobes?</h5>
              <p className="blog-main-div-item-txt">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
            </div>
          </div>
          <div className="blog-main-div-item">
            <img src={res4} className="blog-main-div-item-img" />
            <div className="blog-main-div-item-txt-upper">
              <h5 className="blog-main-div-item-txt">All That's New & Now</h5>
              <p className="blog-main-div-item-txt">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="blog-main-div-item">
            <img src={res5} className="blog-main-div-item-img" />
            <div className="blog-main-div-item-txt-upper">
              <h5 className="blog-main-div-item-txt">
                Best Lawn Kurtis Under Rs.2,500
              </h5>
              <p className="blog-main-div-item-txt">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}
