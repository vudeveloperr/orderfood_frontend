import React from 'react'



class HeaderMenuDropDown extends React.Component{
    render(){
        return(
            <ul className="header__menu__dropdown">
                {this.props.items}
            </ul>
        )
    }
}

export default HeaderMenuDropDown;