import React from 'react'

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onLogin(this.state.username, this.state.password);
    }
    render() {
        return (
            <div class="bg">
                <div className="container">
                    <div class="col-md-3 col-md-offset-4">
                        <h3>Đăng Nhập</h3>
                        <form onSubmit = { this.handleSubmit}>
                            <div class="login-form">
                                <div class="form-group">
                                    <label class="label2" >Tên Tài Khoản</label>
                                    <input onChange={this.handleInputChange} name="username" class="form-control" placeholder="Điền Tên Tài Khoản" id="login-name" type="text" />
                                </div>
                                <div class="form-group">
                                    <label class="label1">Mật Khẩu</label>
                                    <input onChange={this.handleInputChange} name="password" class="form-control" placeholder="Điền Mật Khẩu" id="login-pass" type="password" />
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Giữ tôi luôn đăng nhập </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-danger btn-block">Đăng Nhập</button>

                                <br /> <a href="#"><small>Quên Mật Khẩu</small></a>
                                <br /> <a href="#"><small>Đăng nhập bằng mã dùng một lần</small></a>
                                <br />

                                <div>
                                    <small>Không có tài khoản?</small> <a href="/signup"><small>Tạo tài khoản</small></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;