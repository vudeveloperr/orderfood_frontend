import React from 'react';

class PanelMenuItem extends React.Component{
    render(){
        return(
            <li>
                <a href={this.props.href}>{this.props.value}</a>
            </li>
        );
    }
}

export default PanelMenuItem;