import React from 'react';
import ShopMenu from '../../components/ShopBodyComponent/ShopMenu';
import ShopBanner from '../../components/ShopBodyComponent/ShopBanner';
import FoodItemFilter from '../../components/FoodComponents/FoodItemFilter';

import { Row, Col } from 'antd';

const style = { background: '#0092ff', padding: '8px 0' };

class Food extends React.Component {
    render() {
        return (
            <>
                <ShopMenu></ShopMenu>
                <ShopBanner bannertext="Food" links={<a href="/">Home</a>} text="Food"></ShopBanner>
                <div className="container" style={{marginTop:50}}>
                    <FoodItemFilter/>
                    <Row gutter={[16, 24]}>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Food;