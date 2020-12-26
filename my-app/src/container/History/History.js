import React from 'react';
import { Table, Spin,Modal } from 'antd';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

import {STAT_URL} from '../../consts';



class History extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            spin: true,
            data: [],
            visible: false, 
            items: [],
        }
    }

    columns = [
        {
          title: 'Mã đơn',
          dataIndex: 'id'
        },
        {
            title: 'Thành tiền',
            dataIndex: 'total_amount'
        },
        {
            title: 'Trạng thái',
            render: (record) => {
                switch(record.order_status){
                    case '2':{
                        return(<>Đang chờ shop xác nhận</>);
                    }
                    case '3':{
                        return(<>Đang chờ nhận hàng</>);
                    }
                    case '4':{
                        return(<>Đang giao hàng</>);
                    }
                    case '5':{
                        return(<>Hoàn thành</>);
                    }
                }
            } 
        },
        {
            title: 'Chi tiết đơn hàng',
            render: (record) => (
                <a onClick={() => this.showModal(record.list_food)} >Chi tiết</a>
            )
        },
      ];

    onCancel = () => {
        this.setState({visible: false});
    }

    showModal = (items) => {
        this.setState({visible: true, items: items})
    }

    componentDidMount(){
        let config = { headers: { Auth: window.localStorage.getItem('token') } }
        axios.get(`${STAT_URL}/v1/listorder`, config)
            .then((response) => {
                if (response.data.error.code === 200) {
                    this.setState({data: response.data.data});
                    this.setState({spin: false});
                }
                else {
                    this.props.history.push("/login");
                }
            })
            .catch()
    }

    render() {
        return (
            <>
                <div className="product-details spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shoping__cart__table">
                                    {this.state.spin ? <Spin style={{width:'100%'}} tip="Đang tải..."/> : <Table dataSource={this.state.data} align='left' columns={this.columns}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                visible={this.state.visible}
                onCancel={this.onCancel}
                footer={null}
                >
                    {this.state.items.map((item) => (
                        <div>{item.name} x {item.quantity}</div>
                    ))}
                </Modal>
            </>
        );
    }
}

export default History;