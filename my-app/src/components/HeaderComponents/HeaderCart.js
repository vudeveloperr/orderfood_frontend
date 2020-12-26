import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class HeaderCart extends React.Component {
    constructor(props) {
        super(props);
    }
    
    logout = () => {
        window.localStorage.removeItem('token');
        window.dispatch({type:'LOGIN', data: false});
    }

    render() {
        return (
            <div className="col-lg-3">
                {this.props.login ?
                    <div className="header__cart">
                        <div className="header__cart__price">
                            <a onClick={this.logout} className="login"> Đăng xuất</a>
                        </div>
                    </div>
                    :
                    <Login />
                }
            </div>
        );
    }
}

function Login() {
    return (
        <div className="header__cart">
            <div className="header__cart__price">
                <Link className="login" to="/login"> Đăng nhập</Link>
            </div>
        </div>
    );
}

export default HeaderCart;