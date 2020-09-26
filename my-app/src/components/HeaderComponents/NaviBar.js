import React from 'react';
import NaviItem from './NaviItem.js'
import HeaderMenuDropDown from './HeaderMenuDropDown'
import HeaderMenuDropDownItem from "./HeaderMenuDropDownItem"

const pagesitem = <> 
<HeaderMenuDropDownItem value="Shop Details" href="#"/>
<HeaderMenuDropDownItem value="Shopping Cart" href="#"/>
<HeaderMenuDropDownItem value="Check Out" href="#"/>
<HeaderMenuDropDownItem value="Blog Details" href="#"/>
</>


class NaviBar extends React.Component {
    render() {
        return (
            <div className="col-lg-6">
                <nav className="header__menu">
                    <ul>
                        <NaviItem value="Home" href="/" />
                        <NaviItem value="Shop" href="/shop" />
                        <NaviItem value="Pages" href="#" dropdown={<HeaderMenuDropDown items={pagesitem}/>}/>
                        <NaviItem value="Blog" href="#" />
                        <NaviItem value="Contact" href="#" />
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NaviBar;