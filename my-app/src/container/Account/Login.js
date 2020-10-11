import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div class="bg">
                <div className="container">
                    <div class="col-md-3 col-md-offset-4">
                        <span class="text">Login</span>
                        <div class="login-form">
                            <div class="form-group">
                                <input class="form-control" value="" placeholder="Account" id="login-name" type="text"></input>
                            </div>
                            <div class="form-group">
                                <input class="form-control" value="" placeholder="Password" id="login-pass" type="password"></input>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" /> Giữ tôi luôn đăng nhập </label>
                            </div>
                            <br /> <a class="btn btn-info" href="#">Đăng nhập</a>
                            <br />
                            <br /> <a href="#"><small>Quên mật khẩu</small></a>
                            <br /> <a href="#"><small>Đăng nhập bằng mã dùng một lần</small></a>
                            <br />
                            <br />
                            <br />
                            <div>
                                <small>Không có tài khoản?</small> <a href="#"><small>Tạo tài khoản</small></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;