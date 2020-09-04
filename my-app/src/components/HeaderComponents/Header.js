import React from 'react'
import NaviBar from './NaviBar';
import HeaderLogo from './HeaderLogo';
import HeaderCart from "./HeaderCart";


class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <HeaderLogo></HeaderLogo>
                    <NaviBar></NaviBar>
                    <HeaderCart bag="3" heart="4" price="15000"></HeaderCart>
                </div>
            </div>
        );
    }
}

export default Header;