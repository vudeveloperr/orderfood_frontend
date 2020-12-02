import React from 'react';
import HeaderMenuDropDown from './HeaderMenuDropDown';
import {Link} from 'react-router-dom';
import HeaderMenuDropDownItem from './HeaderMenuDropDownItem'

const pagesitem = <>
    <HeaderMenuDropDownItem value="Shop Details" href="#" />
    <HeaderMenuDropDownItem value="Shopping Cart" href="#" />
    <HeaderMenuDropDownItem value="Check Out" href="#" />
    <HeaderMenuDropDownItem value="Blog Details" href="#" />
</>


class NaviBar extends React.Component {
    render() {
        return (
            <div className="col-lg-6">
                <nav className="header__menu">
                    <ul>
                        <NaviItem value="Home" href="/" />
                        <NaviItem value="Thực phẩm" href="/shop" />
                        <NaviItem value="Pages" href="#" dropdown={<HeaderMenuDropDown items={pagesitem} />} />
                        
                        <NaviItem value="Đăng Nhập" href="/login" />
                    </ul>
                </nav>
            </div>
        );
    }
}


class NaviItem extends React.Component{
    render(){
        return(
            <li>
                <Link to={this.props.href}> {this.props.value}</Link>
                {this.props.dropdown}
            </li>
        );
    }
}

export default NaviBar;