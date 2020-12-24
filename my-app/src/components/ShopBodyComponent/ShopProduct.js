import React from 'react';
import ShopSideBar from "./ShopSideBar"
import SlideSaleOff from "./SlideSaleOff"

import ShopItemFilter from "./ShopItemFilter"
import ShopProductItem from "./ShopProductItem"
import {Host} from '../../consts';
import { connect } from 'react-redux';
import axios from 'axios';


class ShopProduct extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var config = {
            method: 'GET',
            url: Host +'sign-in',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        };

        axios(config)
            .then(response => {

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <ShopSideBar></ShopSideBar>
                        </div>
                        <div className="col-lg-9 col-md-7">
                            <div className="section-title product__discount__title">
                                <h2>Cửa hàng</h2>
                            </div>
                            {/* <SlideSaleOff></SlideSaleOff> */}
                            <ShopItemFilter count={this.props.shop.length}></ShopItemFilter>
                            <div className="row">
                                {this.props.shop.map((item,index)=>{
                                    return <ShopProductItem/>
                                })}

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
        shop: state.shop.shop,
    }
}
export default connect(mapStateToProps)(ShopProduct)
