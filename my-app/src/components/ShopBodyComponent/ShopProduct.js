import React from 'react';
import ShopSideBar from "./ShopSideBar"

import { withRouter } from 'react-router-dom';

import ShopItemFilter from "./ShopItemFilter"
import ShopProductItem from "./ShopProductItem"
import { connect } from 'react-redux';
import axios from 'axios';

import { STAT_URL } from '../../consts'

class ShopProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }
    componentDidMount() {
        axios.get(`${STAT_URL}/v1/food/store`)
        .then((response) => {
            if (response.data.error.code === 200) {
                this.setState({data: response.data.data});   
            }
        })
        .catch()
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
                            <ShopItemFilter count={this.state.data.length}></ShopItemFilter>
                            <div className="row">
                                {this.state.data.map((item, index) => {
                                    return <ShopProductItem item={item}/>
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
export default connect(mapStateToProps)(withRouter(ShopProduct))
