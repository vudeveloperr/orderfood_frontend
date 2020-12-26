import React from 'react';
import { Link } from 'react-router-dom';

import {IMAGE_URL} from '../../consts';

class ShopProductItem extends React.Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic" style={{ backgroundImage: `url(${IMAGE_URL}${this.props.item.img})` }}>

                    </div>
                    <div class="product__item__text">
                        <h6><Link to={`/shop-detail/${this.props.item.id}`}>{this.props.item.name}</Link></h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopProductItem;