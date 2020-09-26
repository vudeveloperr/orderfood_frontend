import React from 'react'

class ShopBanner extends React.Component{
    render(){
        return(
            <section className="breadcrumb-section" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/img/breadcrumb.jpg'})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Organi Shop</h2>
                                <div className="breadcrumb__option">
                                    <a href="/">Home</a>
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShopBanner;