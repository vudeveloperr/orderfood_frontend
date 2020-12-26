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
        // if (!this.props.match.params.id) {
        //     if (!this.props.match.params.name) {
        //         axios.get(`${STAT_URL}/foods`).then((respone) => this.setData(respone)).catch(console.log)
        //     }
        //     else {
        //         axios.get(`${STAT_URL}/foods/search?name=${this.props.match.params.name}`).then((respone) => this.setData(respone)).catch(console.log)
        //     }
        // }
        // else {
        //     axios.get(`${STAT_URL}/foods?idtype=${this.props.match.params.id}`).then((respone) => this.setData(respone)).catch(console.log)
        // }
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
                            <ShopItemFilter count={this.props.shop.length}></ShopItemFilter>
                            <div className="row">
                                {this.props.shop.map((item, index) => {
                                    return <ShopProductItem />
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
