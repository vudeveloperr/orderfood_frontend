import React from 'react';

import { Table, Spin } from 'antd';

const columns = [
    {
      title: 'Mã đơn',
    },
    {
        title: 'Thành tiền',
    },
    {
        title: 'Trạng thái',
    },
    {
        title: 'Chi tiết đơn hàng',
        render: () => (
            <a>Chi tiết</a>
        )
    },
  ];

class History extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            spin: false 
        }
    }
    render() {
        return (
                <div className="product-details spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shoping__cart__table">
                                    {this.state.spin ? <Spin style={{width:'100%'}} tip="Đang tải..."/> : <Table columns={columns}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default History;