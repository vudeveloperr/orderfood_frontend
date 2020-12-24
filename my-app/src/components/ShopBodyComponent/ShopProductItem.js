import React from 'react';
import { Link } from 'react-router-dom';

class ShopProductItem extends React.Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/product/product-1.jpg'})`}}>
                        {/* <ul className="product__item__pic__hover">
                            <li><Link to="#"><FontAwesomeIcon icon={faHeart} color="black" /></Link></li>
                            <li><Link to="#"><FontAwesomeIcon icon={faRetweet} color="black" /></Link></li>
                            <li><Link to="#"><FontAwesomeIcon icon={faShoppingBag} color="black" /> </Link></li>
                        </ul> */}
                    </div>
                    <div class="product__item__text">
                        <h6><Link to="/shop-detail">Crab Pool Security</Link></h6>
                        {/* <h5>$30.00</h5> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopProductItem;