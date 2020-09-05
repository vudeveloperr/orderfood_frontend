import React from 'react';
import SliderItem from './SliderItem'
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

class Categories extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                <Carousel breakPoints={breakPoints}>
                    <SliderItem></SliderItem>
                    <SliderItem></SliderItem>
                    <SliderItem></SliderItem>
                    <SliderItem></SliderItem>
                    <SliderItem></SliderItem>
                    <SliderItem></SliderItem>
                    <SliderItem></SliderItem>
                    <SliderItem></SliderItem>
                </Carousel>
                </div>
            </div>
        );
    }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Categories />, rootElement);

export default Categories;