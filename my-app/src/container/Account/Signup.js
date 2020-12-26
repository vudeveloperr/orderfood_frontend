import React from 'react'
import 'antd/dist/antd.css';
import axios from 'axios';
import { STAT_URL } from '../../consts';
import { Form, Input, Button ,Upload} from 'antd';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { UploadOutlined } from '@ant-design/icons';

const layout = {
    wrapperCol: {
        span: 24,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 16,
    },
};

class Signup extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { username: "", password: "" };
        this.state = { data: [], visible: false, visible1: false };
        this.formRef = React.createRef();
    }

    onFinish = (values) => {
        console.log(values);
        values.type = '3';
        console.log('POST')
        console.log(values)
        axios.post(`${BASE_URL}/v1/login/signup`, values)
            .then((response) => {
                this.setState({ visible: false }, () => {
                    if (response.data.error.code === 200) {
                        this.props.history.push('/login')
                    }
                    else {
                        alert('Đăng kí không thành công');
                    }
                })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="bg">
                <div className="container">
                    <div className="login-container" style={{ textAlign: "center" }}>
                        <h1>Đăng Kí</h1>
                        <Form
                            {...layout}
                            name="basic"
                            onFinish={this.onFinish}
                            style={{ margin: "auto" }}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input placeholder="Tên Đăng Nhập" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password placeholder="Mật Khẩu" />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input placeholder="Địa Chỉ Email" />
                            </Form.Item>

                            <Form.Item
                                name="full_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your full name!',
                                    },
                                ]}
                            >
                                <Input placeholder="Họ và Tên" />
                            </Form.Item>

                            <Form.Item
                                name="address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your address!',
                                    },
                                ]}
                            >
                                <Input placeholder="Địa Chỉ" />
                            </Form.Item>

                            <Form.Item
                                name="mobile"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your mobile!',
                                    },
                                ]}
                            >
                                <Input placeholder="Số Điện Thoại" />
                            </Form.Item>

                            <Form.Item
                                name="image_url" label="Ảnh Bìa"
                            >
                                <Upload {...this.uploadProps}>
                                    <Button icon={<UploadOutlined />}>  Upload Ảnh Bìa  </Button>
                                </Upload>
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit"> Đăng Kí Tài Khoản </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        token: state.login.token,
    }
}

export default connect(mapStateToProps)(withRouter(Signup));