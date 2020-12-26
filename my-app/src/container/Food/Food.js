import React from 'react';
import ShopMenu from '../../components/ShopBodyComponent/ShopMenu';
import ShopBanner from '../../components/ShopBodyComponent/ShopBanner';
import FoodItemFilter from '../../components/FoodComponents/FoodItemFilter';

import {withRouter} from 'react-router-dom';
import { Row, Col } from 'antd';
import axios from 'axios';
import { STAT_URL, IMAGE_URL } from '../../consts';

import { Link } from 'react-router-dom';

const style = { padding: '8px 0' };

class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        this.props.history.listen((location, action) => {
            const urlParams = new URLSearchParams(window.location.search);
        const cate = urlParams.get('cate');
        const name = urlParams.get('name');

        let request;
        if (!!cate && !!name) {
            request = () => axios.get(`${STAT_URL}/v1/food/list?cate=${cate}&name=${name}`)
        }
        else if (!!cate) {
            request = () => axios.get(`${STAT_URL}/v1/food/list?cate=${cate}`)
        }
        else if (!!name) {
            request = () => axios.get(`${STAT_URL}/v1/food/list?name=${name}`)
        }
        else {
            request = () => axios.get(`${STAT_URL}/v1/food/list`)
        }
        request()
            .then(
                (response) => {
                    if (response.data.error.code === 200) {
                        this.setState({ data: response.data.data })
                    }
                })
            .catch(
                console.log
            )
          })

        const urlParams = new URLSearchParams(window.location.search);
        const cate = urlParams.get('cate');
        const name = urlParams.get('name');

        let request;
        if (!!cate && !!name) {
            request = () => axios.get(`${STAT_URL}/v1/food/list?cate=${cate}&name=${name}`)
        }
        else if (!!cate) {
            request = () => axios.get(`${STAT_URL}/v1/food/list?cate=${cate}`)
        }
        else if (!!name) {
            request = () => axios.get(`${STAT_URL}/v1/food/list?name=${name}`)
        }
        else {
            request = () => axios.get(`${STAT_URL}/v1/food/list`)
        }
        request()
            .then(
                (response) => {
                    if (response.data.error.code === 200) {
                        this.setState({ data: response.data.data })
                    }
                })
            .catch(
                console.log
            )

    }

    


    render() {
        return (
            <>
                <ShopMenu></ShopMenu>
                <ShopBanner bannertext="Food" links={<a href="/">Home</a>} text="Food"></ShopBanner>
                <div className="container" style={{ marginTop: 50 }}>
                    <FoodItemFilter />
                    <Row gutter={[16, 24]}>
                        {this.state.data.map((item, index) => (
                            <Col className="gutter-row" span={6}>

                                <div style={style}>
                                    <div className="product__item">
                                        <div className="product__item__pic" style={{ backgroundImage: `url(${IMAGE_URL}${item.image})` }}>

                                        </div>
                                        <div class="product__item__text">
                                            <h6><Link to={`/shop-detail/${item.id_shop}`}>{item.full_name}</Link></h6>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </>
        );
    }
}

export default withRouter(Food);