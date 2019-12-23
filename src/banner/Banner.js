import React, { Component } from "react";
import Slider from "react-slick";
import banner1 from "./banner-1.jpg";

export default class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false
    };

    return (
      <div
        style={{
          margin: "0 auto",
          padding: "15px",
          width: "80%"
        }}
      >
        <Slider {...settings}>
          <div>
            <img alt="Patanjali Japan foundation" src={banner1} />
          </div>
          {/* <div>
            <img alt="Patanjali Japan foundation" src={banner2} />
          </div> */}
        </Slider>
      </div>
    );
  }
}
