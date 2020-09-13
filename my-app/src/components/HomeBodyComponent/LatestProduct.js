import React from "react";
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItem from "./ProductItem"

import Slider from "react-slick";

class LatestProduct extends React.Component {
    render() {
        const settings = {
          dots: false,
          autoplay: true,
          infinite: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
          <div>
            <h2> Single Item</h2>
            <Slider {...settings}>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
            </Slider>
          </div>
        );
      }
}

export default LatestProduct;