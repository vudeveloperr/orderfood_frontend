import React from 'react';
import {Link} from 'react-router-dom';
import {IMAGE_URL} from '../../consts';
class SliderItem extends React.Component {
    render() {
        return (
            <div className="categories__item" style={{ backgroundImage: `url(${IMAGE_URL}${this.props.image})`, width: '270px', margin: "auto"}}>
                <h5><Link to={`/shop-detail/${this.props.id}`}>{this.props.name}</Link></h5>
            </div>
        );
    }
}

export default SliderItem;