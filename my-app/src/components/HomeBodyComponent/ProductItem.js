import React from 'react';

class ProductItem extends React.Component {
    render() {
        return (
            <div class="latest-prdouct__slider__item">
                <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt=""></img>
                    </div>
                    <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                    </div>
                </a>
                <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt=""></img>
                    </div>
                    <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                    </div>
                </a>
                <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt=""></img>
                    </div>
                    <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                    </div>
                </a>
            </div>

        );
    }
}

export default ProductItem;