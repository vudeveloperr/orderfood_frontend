import React from 'react';
import HeaderCartPrice from './HeaderCartPrice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
class HeaderCart extends React.Component{
    render(){
        return(
            <div className="col-lg-3">
                <div className="header__cart">
                    <ul>
                        <li>
                            <a href="#">
                            <FontAwesomeIcon icon={faHeart} color="black"/>  
                            <span>{this.props.heart}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <FontAwesomeIcon icon={faShoppingBag} color="black"/>  
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