import React from 'react';


class ShopDetailItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 0 }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    increase() {
        this.setState({ quantity: this.state.quantity + 1 }, () => {
            window.dispatch({ type: 'CHANGE', data: { index: parseInt(this.props.index), total: this.state.quantity * this.props.price } });
        });
    }
    decrease() {
        if (this.state.quantity > 0) {
            this.setState({ quantity: this.state.quantity - 1 }, () => {
                window.dispatch({ type: 'CHANGE', data: { index: parseInt(this.props.index), total: this.state.quantity * this.props.price } });
            });

        }
    }

    render() {
        return (
            <tr>
                <td className="shoping__cart__item">
                    <img src={this.props.img} alt="" />
                    <h5>{this.props.name}</h5>
                </td>
                <td className="shoping__cart__price">
                    ${this.props.price}
                </td>
                <td className="shoping__cart__quantity">
                    <div className="quantity">
                        <div className="pro-qty">
                            <span className="dec qtybtn" onClick={() => { this.decrease(); }}>-</span>
                            <input type="text" value={this.state.quantity} onChange={() => { }} />
                            <span className="inc qtybtn" onClick={() => { this.increase(); }}>+</span></div>
                    </div>
                </td>
                <td className="shoping__cart__total">
                    ${this.state.quantity * this.props.price}
                </td>
            </tr>
        );
    }
}
export default ShopDetailItem;