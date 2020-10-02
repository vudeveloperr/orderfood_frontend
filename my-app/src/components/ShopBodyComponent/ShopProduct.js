import React from 'react';
import ShopSideBar from "./ShopSideBar"
import SlideSaleOff from "./SlideSaleOff"

class ShopProduct extends React.Component {
    render() {
        return (
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <ShopSideBar></ShopSideBar>
                        </div>
                        <div className="col-lg-9 col-md-7">
                            <div class="section-title product__discount__title">
                                <h2>Sale Off</h2>
                            </div>
                            <SlideSaleOff></SlideSaleOff>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShopProduct;