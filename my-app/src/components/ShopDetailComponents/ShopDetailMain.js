import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class ShopDetailMain extends React.Component {
    constructor(props) {
        super(props);
        var path = window.location.pathname;
        if (path == "/shop-detail/information") {
            this.state = { activeindex: [{ nav: "nav-link" }, { nav: "nav-link active" }, { nav: "nav-link" }] }
        }
        else if (path == "/shop-detail/reviews") {
            this.state = { activeindex: [{ nav: "nav-link" }, { nav: "nav-link" }, { nav: "nav-link active" }] }
        }
        else {
            this.state = { activeindex: [{ nav: "nav-link active" }, { nav: "nav-link" }, { nav: "nav-link" }] }
        }
    }

    click(i) {
        var constant = [{ nav: "nav-link" }, { nav: "nav-link" }, { nav: "nav-link" }];
        var style = { nav: "nav-link active" };
        constant[i] = style;
        this.setState({ activeindex: constant });
        return false;
    }


    render() {
        return (
            <Router>
                <div className="product-details spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shoping__cart__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="shoping__product">Products</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="shoping__cart__item">
                                                    <img src="img/cart/cart-1.jpg" alt="" />
                                                    <h5>Vegetable’s Package</h5>
                                                </td>
                                                <td className="shoping__cart__price">
                                                    $55.00
                                    </td>
                                                <td className="shoping__cart__quantity">
                                                    <div className="quantity">
                                                        <div className="pro-qty"><span className="dec qtybtn">-</span>
                                                            <input type="text" value="1" />
                                                            <span className="inc qtybtn">+</span></div>
                                                    </div>
                                                </td>
                                                <td className="shoping__cart__total">
                                                    $110.00
                                    </td>
                                                <td className="shoping__cart__item__close">
                                                    <span className="icon_close"></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="shoping__cart__item">
                                                    <img src="img/cart/cart-2.jpg" alt="" />
                                                    <h5>Fresh Garden Vegetable</h5>
                                                </td>
                                                <td className="shoping__cart__price">
                                                    $39.00
                                    </td>
                                                <td className="shoping__cart__quantity">
                                                    <div className="quantity">
                                                        <div className="pro-qty"><span className="dec qtybtn">-</span>
                                                            <input type="text" value="1" />
                                                            <span className="inc qtybtn">+</span></div>
                                                    </div>
                                                </td>
                                                <td className="shoping__cart__total">
                                                    $39.99
                                    </td>
                                                <td className="shoping__cart__item__close">
                                                    <span className="icon_close"></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="shoping__cart__item">
                                                    <img src="img/cart/cart-3.jpg" alt="" />
                                                    <h5>Organic Bananas</h5>
                                                </td>
                                                <td className="shoping__cart__price">
                                                    $69.00
                                    </td>
                                                <td className="shoping__cart__quantity">
                                                    <div className="quantity">
                                                        <div className="pro-qty"><span class="dec qtybtn">-</span>
                                                            <input className="text" value="1" />
                                                            <span className="inc qtybtn">+</span></div>
                                                    </div>
                                                </td>
                                                <td className="shoping__cart__total">
                                                    $69.99
                                    </td>
                                                <td className="shoping__cart__item__close">
                                                    <span className="icon_close"></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="product__details__tab" >
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <Link className={this.state.activeindex[0].nav} onClick={() => { this.click(0) }} to={'/shop-detail/'}>
                                                Decription
                                        </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={this.state.activeindex[1].nav} onClick={() => { this.click(1) }} to={'/shop-detail/information'}>
                                                Infomation
                                        </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={this.state.activeindex[2].nav} onClick={() => { this.click(2) }} to={'/shop-detail/reviews'}>
                                                Reviews
                                        </Link>
                                        </li>
                                    </ul>
                                    <div className="tab-content">

                                        <Switch>
                                            <Route exact path="/shop-detail" component={decription} />
                                            <Route path="/shop-detail/information" render={infomation} />
                                            <Route path="/shop-detail/reviews" render={review} />
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default ShopDetailMain;


function decription() {
    return (<div className="product__details__tab__desc">
        <h6>Decription</h6>
        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
        suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
        vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
        Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
        accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
        pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
        elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
        vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
        elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
        porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
        porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
        sed sit amet dui. Proin eget tortor risus.</p>
    </div>
    );
}

function infomation() {
    return (
        <div className="product__details__tab__desc">
            <h6>Infomation</h6>
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
            Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
            sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
            eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
            sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
            diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        Proin eget tortor risus.</p>
            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
            elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
            porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
        </div>
    );
}

function review() {
    return (
        <div className="product__details__tab__desc">
            <h6>Review</h6>
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
            Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
            sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
            eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
            sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
            diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
    Proin eget tortor risus.</p>
        </div>
    );
}
