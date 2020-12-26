import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Input } from 'antd';
import axios from 'axios';

import {STAT_URL } from '../../consts';

class CheckoutMain extends React.Component{
    constructor(props){
        super(props);
    }

    onFinish = (values) => {
        console.log(values);
        console.log(this.props.cart);
        values.list_food = this.props.cart;
        values.store_id = this.props.shop;
        
        let config = {headers:{Auth: window.localStorage.getItem('token')}}

        axios.post(`${STAT_URL}/v1/order`, values,config)
        .then((response) => {
            if(response.data.error.code === 200){
                window.dispatch({type:'CLEAR'})
                alert('Đặt hàng thành công');
            }
            else{
                alert('Đặt hàng thất bại');
            }
        })
        .catch()
    }

    render(){
        return(
            <section className="checkout spad">
                <div className="container">
                    <div className="checkout__form">
                        <h4>Billing Details</h4>

                        <div className="row">
                            <div className="col-lg-8 col-md-6">
                                <Form
                                    onFinish={this.onFinish}
                                    initialValues = {{ghichu: ""}}
                                >
                                    <p>Địa chỉ <span>*</span></p>
                                    <Form.Item name="address" 
                                    rules={[
                                        {
                                          required: true,
                                          message: 'Không bỏ trống địa chỉ',
                                        },
                                      ]}
                                    className="checkout__input">
                                        <Input className="checkout__input__add" />
                                    </Form.Item>
                                    <p>Thông tin bổ sung <span>*</span></p>
                                    <Form.Item name="options_orderfood" className="checkout__input">
                                        <Input placeholder="Ngày giờ giao hàng,địa điểm phụ,..." />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button style={{ height: '53px' }} htmlType="submit" className="site-btn">ĐẶT HÀNG</Button>
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="checkout__order">
                                    <h4>Đơn hàng của bạn</h4>
                                    <div className="checkout__order__products">Sản phẩm <span>Tổng</span></div>
                                    <ul>
                                        {this.props.cart.map((item) => {
                                            return !!item ? <li>{item.name}<span>{item.total}đ</span></li> : <></>
                                        })}
                                    </ul>
                                    <div className="checkout__order__subtotal">Tổng<span>{this.props.cart.reduce((total, value) => { return total + (!!value ? value.total : 0) }, 0)}đ</span></div>
                                    <div className="checkout__order__total">Thành tiền <span>{this.props.cart.reduce((total, value) => { return total + (!!value ? value.total : 0) }, 0)}đ</span></div>
                                    <p>Đơn hàng của quý khách sẽ được giao trong vòng 24h, vui lòng không tắt điện thoại để nhân viên có thể liên lạc được với quý khách</p>
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="payment">
                                            Check Payment
                                            <input type="checkbox" id="payment" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="paypal">
                                            Paypal
                                            <input type="checkbox" id="paypal" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
        shop: state.shop.id,
    }
}
export default connect(mapStateToProps)(CheckoutMain)
