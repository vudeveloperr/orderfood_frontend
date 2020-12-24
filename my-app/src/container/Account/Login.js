import React from 'react'
import axios from 'axios';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { BASE_URL } from '../../consts';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

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
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };
    }

    login(values) {
        axios.post(`${BASE_URL}/v1/login`, values)
            .then(
                (response) => {
                    if (response.data.error.code === 200) {
                        window.dispatch({ type: 'SET_TOKEN', data: response.data.data })
                        window.dispatch({ type: 'LOGIN', data: true })
                        this.props.history.push('/')
                    }
                    else {
                        alert('Đăng nhập không thành công');
                    }
                }
            )
            .catch(console.log)
    }

    onFinish = (values) => {
        this.login(values);
    }
    render() {
        return (
            <div className="bg">
                <div className="container">
                    <div className="login-container" style={{ textAlign: "center" }}>
                        <h1>Đăng Nhập</h1>
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
                                <Input placeholder="Username" />
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
                                <Input.Password placeholder="Password" />
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit"> Đăng nhập </Button>
                            </Form.Item>
                            <div>
                                <small>Không có tài khoản?</small> <a href="signup"><small>Tạo tài khoản</small></a>
                            </div>
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

export default connect(mapStateToProps)(withRouter(Login));