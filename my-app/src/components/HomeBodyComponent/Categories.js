import React from 'react';
import SliderItem from './SliderItem'

class Categories extends React.Component {
    render() {
        return (
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
        );
    }
}

export default Categories;