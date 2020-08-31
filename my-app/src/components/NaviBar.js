import React from 'react';
import NaviItem from './NaviItem.js'


class NaviBar extends React.Component {
    render() {
        return (
            <div className="col-lg-6">
                <nav className="header__menu">
                    <ul>
                        <NaviItem value="Home" href="#" />
                        <NaviItem value="Shop" href="#" />
                        <NaviItem value="Pages" href="#" />
                        <NaviItem value="Blog" href="#" />
                        <NaviItem value="Contact" href="#" />
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NaviBar;