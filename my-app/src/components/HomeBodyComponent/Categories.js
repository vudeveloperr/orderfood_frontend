import React from "react";
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "./SliderItem"

import Slider from "react-slick";

class Categories extends React.Component {
    render() {
        var settings = {
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 4,
            slidesToScroll: 2,
            nextArrow: false,
            prevArrow: false,
            swipeToSlide: true,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        };
        return (
            <div className="container">
                <div className="App">
                    <Slider {...settings}>
                        <SliderItem></SliderItem>
                        <SliderItem></SliderItem>
                        <SliderItem></SliderItem>
                        <SliderItem></SliderItem>
                        <SliderItem></SliderItem>
                        <SliderItem></SliderItem>
                        <SliderItem></SliderItem>
                        <SliderItem></SliderItem>
                    </Slider>
                </div>
            </div>
        );
    }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Categories />, rootElement);

export default Categories;