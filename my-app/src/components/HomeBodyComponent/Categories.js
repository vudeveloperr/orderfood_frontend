import React from 'react';
import SliderItem from './SliderItem'
<<<<<<< HEAD
=======
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
>>>>>>> pr/1

class Categories extends React.Component {
    render() {
        return (
<<<<<<< HEAD
            <section className="categories">
                <div className="container">
                    <div className="row">
                        <div className="categories__slider ">
                            <SliderItem></SliderItem>
                            <SliderItem></SliderItem>
                            <SliderItem></SliderItem>
                            <SliderItem></SliderItem>
                            <SliderItem></SliderItem>
                        </div>
                    </div>
                </div>
            </section>
=======
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
>>>>>>> pr/1
        );
    }
}

<<<<<<< HEAD
=======

const rootElement = document.getElementById("root");
ReactDOM.render(<Categories />, rootElement);

>>>>>>> pr/1
export default Categories;