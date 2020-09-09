import React from 'react';

class HeaderCartPrice extends React.Component {
    render() {
        return(
        <div className="header__cart__price">
            "item: "
            <span>${this.props.price}</span>
        </div>
        );
    }
}

export default HeaderCartPrice;