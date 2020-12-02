import React from 'react';
import Link from 'react-router-dom'


class NaviItem extends React.Component{
    render(){
        return(
            <li>
                <a href={this.props.href}>{this.props.value}</a>
                {this.props.dropdown}
            </li>
        );
    }
}
export default NaviItem;