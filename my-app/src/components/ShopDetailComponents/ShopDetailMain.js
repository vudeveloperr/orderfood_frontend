import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import ShopDetailItem from './ShopDetailItem';
import { connect } from 'react-redux';

import { Form, Button, Input } from 'antd';

const { TextArea } = Input;

class ShopDetailMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = { img: 'https://via.placeholder.com/150', qty: 1 };
        this.state.item = {};
        this.state.comments = [];
        this.formRef = React.createRef();
    }

    render() {
        console.log(this.props.cart, ': console.log(this.props.cart);');

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
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.shopItem.map((item, index) => {
                                                return <ShopDetailItem name= {item.name} index= {index} price={item.sale_price}
                                                img={process.env.PUBLIC_URL + item.image} id={item.id}
                                                />})}    
                                        </tbody>
                                    </table>
                                </div>
                                <div className="shoping__checkout" key={this.props.cart}>
                                    <h5>Cart Total</h5>
                                    <ul>
                                        <li>Total <span>${this.props.total.length === 0 ? 0 : this.props.total.reduce((sum, num) => { return sum + num || 0 })}</span></li>
                                    </ul>
                                    <a href="#" className="primary-btn">Thanh toán</a>
                                </div>
                                <div className="product__details__tab" >
                                <ul className="nav nav-tabs">
                                        <li className="nav-item active">
                                            Nhận xét
                                        </li>
                                    </ul>
                                    <Form
                                        name="basic"
                                        onFinish={this.onFinish}
                                        ref={this.formRef}
                                    >
                                        <Form.Item
                                            name="noidung"
                                        >
                                            <TextArea
                                                placeholder="Nhận xét tại đây"
                                                autoSize={{ minRows: 3, maxRows: 5 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            style={{ float: 'right' }}
                                        >
                                            <Button htmlType="submit">Nhận xét</Button>
                                        </Form.Item>
                                    </Form>
                                    <div className="tab-content">
                                        <div className="product__details__tab__desc">
                                            <div className="container">
                                                {
                                                    this.state.comments.map((item) => {
                                                        return (
                                                            <div class="row" style={{margin:'10px auto 0px auto', borderBottom: '1px solid #dee2e6', width:'100%' }}>
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img src="/user.png" class="media-object" style={{ width: '40px' }} />
                                                                    </div>
                                                                    <div className="media-body" style={{ marginLeft: '20px' }}>
                                                                        <h4 className="media-heading title">{item.ten}</h4>
                                                                        <p className="komen">
                                                                            {item.noidung}<br />
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                }

                                            </div>
                                        </div>
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

const mapStateToProps = (state) => {
    return {
        shopItem: state.shop.shopItem,
        total: state.cart.cart,
    }
}
export default connect(mapStateToProps)(ShopDetailMain)

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
