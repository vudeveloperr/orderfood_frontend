import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ShopDetailItem from './ShopDetailItem';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import axios from 'axios';

import { STAT_URL, IMAGE_URL } from '../../consts';

import { Form, Button, Input, Rate } from 'antd';

const { TextArea } = Input;

class ShopDetailMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = { img: 'https://via.placeholder.com/150', qty: 1 };
        this.state.item = {};
        this.state.comment = [];
        this.state.rate = 0;
        this.formRef = React.createRef();
    }

    componentDidMount() {
        window.dispatch({ type: 'SET_SHOP_ID', data: this.props.match.params.id })
        axios.get(`${STAT_URL}/v1/food/listfoodstore?sid=${this.props.match.params.id}`)
            .then((respone) => {
                if (respone.data.error.code === 200) {
                    console.log(respone.data.data)
                    window.dispatch({ type: 'SET_SHOP_ITEM', data: respone.data.data })
                }
            })
            .catch(console.log)
        axios.get(`${STAT_URL}/v1/store/comments?sid=${this.props.match.params.id}`)
            .then((respone) => {
                if (respone.data.error.code === 200) {
                    this.setState({ comment: respone.data.data })
                }
            })
            .catch(console.log)
        axios.get(`${STAT_URL}/v1/store/rates?sid=${this.props.match.params.id}`)
            .then((respone) => {
                if (respone.data.error.code === 200) {
                    this.setState({ rate: Math.floor(respone.data.data) })
                }
            })
            .catch(console.log)
        

    }

    onFinish = (values) => {
        let config = { headers: { Auth: window.localStorage.getItem('token') } };
        values.id_store = this.props.match.params.id;
        axios.log(`${STAT_URL}/v1/store/comment`, values, config)
            .then((respone) => {
                if (respone.data.error.code === 200) {
                    axios.get(`${STAT_URL}/v1/store/comments?sid=${this.props.match.params.id}`)
                        .then((respone) => {
                            if (respone.data.error.code === 200) {
                                this.setState({ comment: respone.data.data }, () => console.log(this.state.comment))
                            }
                        })
                        .catch(console.log)
                }
                else {
                    this.props.history.push("/login");
                }
            })
            .catch(console.log)
    }

    rate = value => { 
        this.setState({ rate: value })
        let values = {store_id:this.props.match.params.id, rate: value}
        let config = { headers: { Auth: window.localStorage.getItem('token') } };
        axios.post(`${STAT_URL}/v1/store/rate`, values, config)
            .then((respone) => {
                if (respone.data.error.code === 200) {
                    alert('Cảm ơn bạn đã đánh giá cho cửa hàng')
                }
                else {
                    this.props.history.push("/login");
                }
            })
            .catch(console.log)
    }

    render() {
        return (
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
                                            return <ShopDetailItem name={item.name} index={index} initValue={!!this.props.total[index] ? this.props.total[index].quantity : 0} price={item.sale_price}
                                                img={IMAGE_URL + item.image} id={item.id}
                                            />
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                Đánh giá cửa hàng: <span><Rate value={this.state.rate} onChange={this.rate} /></span>
                            </div>
                            <div className="shoping__checkout" key={this.props.cart}>
                                <h5>Tổng giỏ hàng</h5>
                                <ul>
                                    <li>Tổng tiền <span>{this.props.total.length === 0 ? 0 : this.props.total.reduce((sum, num) => { return sum + (!!num ? num.total : 0) }, 0)}đ</span></li>
                                </ul>
                                <Link to="/check-out" className="primary-btn">Thanh toán</Link>
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
                                        name="comment"
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
                                                this.state.comment.map((item) => {
                                                    return (
                                                        <div class="row" style={{ margin: '10px auto 0px auto', borderBottom: '1px solid #dee2e6', width: '100%' }}>
                                                            <div className="media">
                                                                <div className="media-left">
                                                                    <img src="/user.png" class="media-object" style={{ width: '40px' }} />
                                                                </div>
                                                                <div className="media-body" style={{ marginLeft: '20px' }}>
                                                                    <h4 className="media-heading title">{ }</h4>
                                                                    <p className="komen">
                                                                        {item.comment}<br />
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
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shopItem: state.shop.shopItem,
        total: state.cart.cart,
    }
}
export default connect(mapStateToProps)(withRouter(ShopDetailMain))
