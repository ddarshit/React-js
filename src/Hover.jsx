
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3><img src="https://picsum.photos/1000/500" alt="" className="mx-auto" /></h3>
          </div>
          <div>
            <h3><img src="https://picsum.photos/1000/500" alt="" className="mx-auto" /></h3>
          </div>
          <div>
            <h3><img src="https://picsum.photos/1000/500.jpg" alt="" className="mx-auto" /></h3>
          </div>
          <div>
            <h3><img src="https://picsum.photos/1000/500.webp" alt="" className="mx-auto" /></h3>
          </div>
          <div>
            <h3><img src="https://picsum.photos/1000/500?grayscale" alt="" className="mx-auto" /></h3>
          </div>
          <div>
            <h3><img src="https://picsum.photos/seed/picsum/1000/500" alt="" className="mx-auto" /></h3>
          </div>
        </Slider>
      </div>
    );
  }
}
