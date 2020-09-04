import React from 'react'

class HeaderMenuDropDownItem extends React.Component{
    render(){
        return(
            <li>
                <a href={this.props.href}>{this.props.value}</a>
            </li>
        );
    }
}

export default HeaderMenuDropDownItem;