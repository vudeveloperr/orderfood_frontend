import React from 'react';


class NaviItem extends React.Component{
    render(){
        return(
            <li>
                <a href={this.props.href}>{this.props.value}</a>
            </li>
        );
    }
}

export default NaviItem;