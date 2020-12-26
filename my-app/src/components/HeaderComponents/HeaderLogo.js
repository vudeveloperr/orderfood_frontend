import React from 'react';
import {Link} from 'react-router-dom';

class HeaderLogo extends React.Component{
    render(){
        return(
            <div className="col-lg-3">
                <div className="header__logo">
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + '/img/logodopde.png'}></img>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HeaderLogo;