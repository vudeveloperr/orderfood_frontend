import React from 'react'

class Signup extends React.Component {
    
    render() {
        return (
            <div class="bg">
                <div className="container">
                    <div class="col-md-3 col-md-offset-4">
                        <h3>Đăng Kí</h3>
                        <div class="login-form">
                            <div class="form-group">
                                <label class="label2" >Tên Tài Khoản</label>
                                <input onChange={this.handleInputChange} class="form-control" value="" placeholder="Điền Tên Tài Khoản" name="username" id="login-name" type="text"/>
                            </div>
                            <div class="form-group">
                                <label class="label1">Mật Khẩu</label>
                                <input onChange={this.handleInputChange} class="form-control" value="" placeholder="Điền Mật Khẩu" name="password" id="login-pass" type="password"/>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Giữ tôi luôn đăng nhập </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-danger btn-block">Đăng Kí</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Signup;
