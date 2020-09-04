import React from 'react';

class SliderItem extends React.Component {
    render() {
        return (
            <div class="col-lg-3">
                <div className="categories__item" style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'img/categories/cat-1.jpg'}`, width: '270px' }}>
                    <h5><a href="#">Fresh Fruit</a></h5>
                </div>
            </div>
        );
    }
}

export default SliderItem;