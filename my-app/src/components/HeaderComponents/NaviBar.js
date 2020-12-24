import React from 'react';
import { Link } from 'react-router-dom';



class NaviBar extends React.Component {
    render() {
        return (
            <div className="col-lg-6">
                <nav className="header__menu">
                    <ul>
                        <li>
                            <Link to="">Trang chủ</Link>
                        </li>
                        <li>
                            <Link to="">Cửa hàng</Link>
                        </li>
                        {this.props.login === true ? 
                        <li>
                            <Link to="">Lịch sử mua hàng</Link>
                        </li>
                        :
                        <></>
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NaviBar;