import React from 'react';
import HeaderCartPrice from './HeaderCartPrice';
import {fas} from '@fortawesome/free-solid-svg-icons';

class HeaderCart extends React.Component{
    render(){
        return(
            <div className="col-lg-3">
                <div className="header__cart">
                    <ul>
                        <li>
                            <a href="#">
                            <FontAwesomeIcon icon={['fas', 'heart']}/>  
                                <span>{this.props.heart}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-shopping-bag">
                                    ::before
                                </i>
                                <span>{this.props.bag}</span>
                            </a>
                        </li>
                    </ul>
                    <HeaderCartPrice price={this.props.price}></HeaderCartPrice>
                </div>
            </div>
        );
    }
}

export default HeaderCart;